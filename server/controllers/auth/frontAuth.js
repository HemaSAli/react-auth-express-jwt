const { verify } = require("jsonwebtoken");

exports.get = (req, res) => {  
  if (req.cookies.jwt) {
    verify(req.cookies.jwt, process.env.SECRET, (err, result) => {
      if (err) {        
        res.status(401).send({err: "unAutorized"});
      } else {
        res.status(200).send("success");
      }
    });
  } else {
    res.status(401).send({err: "unAutorized"});
  }
};
