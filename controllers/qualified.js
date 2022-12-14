const DrivePost = require("../models/DrivePost");

module.exports = async (req, res) => {
  loggedIn = req.session.userId;
  const data = await DrivePost.find({ result: "pass" });
  res.render("qualified", { data: data });
};
