// const sessionIdToUserMap=new Map()
const jwt=require("jsonwebtoken")
const secret="Deependra"

function setUser(user){
//    return sessionIdToUserMap.set(id,user)
return jwt.sign({
    _id:user.id,
    email:user.email
},secret)
}

function getUser(token){
    // return sessionIdToUserMap.get(id)
    if(!token) return null  
    try {
      return jwt.verify(token,secret)
    } catch (error) {
        return null; 
    }
}

module.exports={
    setUser,
    getUser
}