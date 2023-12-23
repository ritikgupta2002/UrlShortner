const sessionIdToUserMapping=new Map();

async function setuser(id,user){
    
    sessionIdToUserMapping.set(id,user);
}

async function getuser(id){
    return sessionIdToUserMapping.get(id);
}


module.exports={
    setuser,
    getuser 
}