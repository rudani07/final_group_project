// const Appointment = require("../models/AppointmentPost");
const DrivePost = require("../models/DrivePost");

module.exports = async (req, res) => {
  loggedIn = req.session.userId;
  const appointment = null;
  const data = await DrivePost.findOne({ _id: req.session.userId });

  res.render("g", { appointment: appointment, data: data });
};
