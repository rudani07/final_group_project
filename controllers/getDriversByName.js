const DrivePost = require("../models/DrivePost");
module.exports = async (req, res) => {
  loggedIn = req.session.userId;
  console.log(req);
  const drivers = await DrivePost.find({ testType: req.body.testType });
  const driverDetails = await DrivePost.find({ firstname: req.body.firstname });

  res.render("examiner", {
    testType: req.body.testType,
    drivers: drivers,
    driverDetails: driverDetails,
  });
};
