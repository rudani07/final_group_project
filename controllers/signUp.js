const DrivePost = require("../models/DrivePost");

module.exports = async (req, res, error) => {
  let invalid = {
    conPass: true,
    invalPass: false,
  };
  if (req.body.password == req.body.repeatPassword) {
    await DrivePost.create({
      username: req.body.username,
      password: req.body.password,
      userType: req.body.userType,
    });
  } else {
  }
  invalid.conPass = false;
  res.render("login", { invalid });
};
