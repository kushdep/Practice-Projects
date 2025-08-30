const User=require('../models/user.js')
const {v4:uuidv4}=require("uuid")
const {setUser}=require("../service/auth.js")

async function handleCreateUser(req,res){
    const {name,email,password}=req.body
    await User.create({
        name,
        email,
        password
    })
    return res.render('home')
}

async function handleLoginUser(req,res){
    const {email,password}=req.body
    const user= await User.findOne({email,password})
    if(!user) return res.render("login",{
        error:"Invalid email or password"
    })

    // const sessionId=uuidv4()
    // setUser(sessionId,user)
    const token=setUser(user)
    res.cookie('token',token)
    return res.redirect("/ ")
}

module.exports={handleCreateUser,handleLoginUser}