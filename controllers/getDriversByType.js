const DrivePost = require("../models/DrivePost");
module.exports = async (req, res) => {
  loggedIn = req.session.userId;
  const drivers = await DrivePost.find({ testType: req.query.testType });
  res.render("examiner", {
    testType: req.query.testType,
    drivers: drivers,
    driverDetails: null,
  });
};
