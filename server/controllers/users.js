const { user } = require("../database/models");

exports.get = async (req, res) => {
  const { id } = req;
  const userData = await user.findAll({ where: { id } });
  const data = userData[0].dataValues;
  res.status(200).send(data);
};
