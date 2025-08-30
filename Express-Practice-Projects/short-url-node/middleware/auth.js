const {getUser}=require('../service/auth.js')

async function restricToLoggedInUserOnly(req,res,next){
    // const userid=req.cookies?.uid
    const userid=req.headers["authorization"]
    
    if(!userid) return res.redirect('/login')
        
        const token=userid.split("Bearer ")[1]
        const user=getUser(token)
        // const user=getUser(userid)
        // console.log(user)


    if(!user) return res.redirect('/login')

    req.user=user;
    next() 
}

async function checkAuth(req,res,next){
    // const userid=req.cookies?.uid
    const userid=req.headers["authorization"]
    // console.log(req.headers)
    const token=userid.split("Bearer ")[1]
    
        
    // const user=getUser(userid)
        const user=getUser(token)


    req.user=user;
    next() 
}

module.exports={restricToLoggedInUserOnly,checkAuth}