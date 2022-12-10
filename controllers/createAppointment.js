const Appointment = require("../models/AppointmentPost");

module.exports = async (req, res, error) => {
  const dateFor = req.body.date;

  const [year, day, month] = dateFor.split("-");

  const dateFormate = [
    day.toString().padStart(2, "0"),
    month,
    year.toString().padStart(2, "0"),
  ].join("-");
  await Appointment.create({
    date: dateFormate,
    time: req.body.time,
  });
  loggedIn = req.session.userId;
  const appointment = null;
  const date = "";
  res.render("appointments", { appointment: appointment, date: date });
};
