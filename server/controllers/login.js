const { sign } = require("jsonwebtoken");
const { user } = require("../database/models");
exports.post = async (req, res) => {
  const { username, password } = req.body;
  const databaseResult = await user.findAll({ where: { username, password } });
  if (databaseResult[0]) {
    const { id } = databaseResult[0].dataValues;
    const tokenObject = { id };
    sign(tokenObject, process.env.SECRET, (err, token) => {
      if (err) {
        res.status(500).send("Something Error !");
      } else {
        res.cookie("jwt", token, { maxAge: 6048000000 });
        res.status(200).send({ token });
      }
    });
  } else {
    res.status(401).send("Wrong data !");
  }
};
