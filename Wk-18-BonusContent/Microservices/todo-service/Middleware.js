const axios = require("axios");

const checkTokenInHeader = async (req, res, next)=>{
  console.log(req.headers);
  if(req.headers.authorization){
    // header has the form: "Bearer <token>"
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    const vResponse = await verifyToken(token);
    console.log(vResponse);
    if(vResponse.payload){
      next();
    }else if (vResponse.error){
      res.status(401).json({error: vResponse.error})
    }
  }else{
    res
      .status(401)
      .json({error: "Please login to continue..."})
    ;
  }
};

const verifyToken = async (incomingToken)=>{
  try{
    const resp = await axios.get('http://localhost:8000/api/users/verifyToken',{
      params: { token: incomingToken}
    });
    return resp.data;
  }catch(err){
    return({error: "bad token"});
  }
};

module.exports = {
  checkTokenInHeader
}
