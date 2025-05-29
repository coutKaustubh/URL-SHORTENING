const sessionIDtoUserMap = new Map(); //like and hash map or maps or unorderedmap (means stores key - value pairs) like an object in js

function setUser(id,user){
   return sessionIDtoUserMap.set(id,user); //sessionIDtoUserMap set kr diya ki xyz user ka - abc id h
}
function getUser(id){
   return sessionIDtoUserMap.get(id); //jo bhi id required  hogi we will get by sending parameters (user,id)
}

module.exports = {
    setUser,
    getUser,
}