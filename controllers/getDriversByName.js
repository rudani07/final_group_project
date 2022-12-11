const DrivePost = require("../models/DrivePost");
module.exports = async (req, res) => {
  loggedIn = req.session.userId;
  const drivers = await DrivePost.find({ testType: req.query.testType });
  const driverDetails = await DrivePost.find({
    firstname: req.query.firstname,
  });
  console.log("driverDetails");
  console.log(driverDetails);

  res.render("examiner", {
    testType: req.query.testType,
    drivers: drivers,
    driverDetails: driverDetails[0],
  });
};
