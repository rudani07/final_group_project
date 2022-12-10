const Appointment = require("../models/AppointmentPost");
module.exports = async (req, res) => {
  loggedIn = req.session.userId;

  const dateFor = req.query.date;

  const [year, day, month] = dateFor.split("-");

  const date = [
    day.toString().padStart(2, "0"),
    month.toString().padStart(2, "0"),
    year,
  ].join("-");
  const appointmentArr = await Appointment.find({
    date: date,
  });
  const appointment = [];
  for (let i = 0; i < appointmentArr.length; i++) {
    appointment.push(appointmentArr[i].time);
  }
  res.render("appointments", {
    appointment: appointment,
    date: date,
  });
};
