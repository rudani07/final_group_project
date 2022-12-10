// const Appointment = require("../models/AppointmentPost");
module.exports = async (req, res) => {
  loggedIn = req.session.userId;
  const appointment = null;
  res.render("appointments", { appointment });
};
