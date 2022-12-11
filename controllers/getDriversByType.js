const DrivePost = require("../models/DrivePost");
module.exports = async (req, res) => {
  loggedIn = req.session.userId;
  console.log("kkkkkkkkkkkkkkkkkk");
  console.log(req);
  const drivers = await DrivePost.find({ testType: req.query.testType });
  console.log(drivers);
  res.render("examiner", {
    testType: req.query.testType,
    drivers: drivers,
    driverDetails: null,
  });
};
