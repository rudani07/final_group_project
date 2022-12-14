const Appointment = require("../models/AppointmentPost");
module.exports = async (req, res) => {
  loggedIn = req.session.userId;
  const dateFor = req.query.date;

  const [year, month, day] = dateFor.split("-");

  const date = [
    month.toString().padStart(2, "0"),
    day.toString().padStart(2, "0"),
    year,
  ].join("-");
  const appointmentArr = await Appointment.find({
    date: date,
  });
  const appointment = [];
  for (let i = 0; i < appointmentArr.length; i++) {
    if (appointmentArr[i].isTimeSlotAvailable)
      appointment.push(appointmentArr[i].time);
  }

  res.render("g", { appointment: appointment, date: date, data: req.query });
};
