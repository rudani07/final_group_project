// const Appointment = require("../models/AppointmentPost");
module.exports = async (req, res) => {
  loggedIn = req.session.userId;
  res.render("examiner", {
    testType: null,
    drivers: null,
    driverDetails: null,
  });
};
