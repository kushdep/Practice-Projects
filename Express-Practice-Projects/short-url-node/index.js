const express = require("express");
const path=require('path')
const { connectToMongoDB } = require("./connect");
const URL = require("./models/url");
const cookieParser=require('cookie-parser')
const {restricToLoggedInUserOnly,checkAuth}=require('./middleware/auth.js')
const app = express();
const PORT = 8001;


const urlRoute = require("./routes/url");
const staticRoute=require('./routes/StaticRouter.js')
const userRoute=require('./routes/user.js')

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb connected")
);

app.set("view engine","ejs")
app.set("views",path.resolve('./views'))

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());

app.use('/',checkAuth,staticRoute)
app.use('/user',userRoute)
app.use("/url",restricToLoggedInUserOnly, urlRoute);

app.get('/test',async(req,res)=>{
  const allUrls=await URL.find({})
  return res.render('home',{
    urls: allUrls
  })
})

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
