const sessionIdToUserMapping = new Map(); // for basic authentication
const jwt = require("jsonwebtoken"); //for jwt authentication
const secret = "rk$$123";

// for basic authentication
async function setuser(id, user) {
  sessionIdToUserMapping.set(id, user);
}

async function getuser(id) {
  return sessionIdToUserMapping.get(id);
}

// for jwt authentication

async function setuserJWT(user) {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    secret
  );
}

async function getuserJWT(token) {
  if (!token) return null;
  return jwt.verify(token, secret);
}

module.exports = {
  setuser,
  getuser,
  setuserJWT,
  getuserJWT,
};
