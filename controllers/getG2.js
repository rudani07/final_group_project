// const Appointment = require("../models/AppointmentPost");
const DrivePost = require("../models/DrivePost");

module.exports = async (req, res) => {
  loggedIn = req.session.userId;
  const appointment = null;
  const data = await DrivePost.findOne({ _id: req.session.userId });

  // const appointment = await Appointment.find({ date: req.query.date });
  // for (let i = 0; i < appointmentArr.length; i++) {
  //   if (appointment[appointmentArr[i].date] != null) {
  //     appointment[appointmentArr[i].date] = [
  //       ...appointment[appointmentArr[i].date],
  //       appointmentArr[i].time,
  //     ];
  //   } else {
  //     appointment[appointmentArr[i].date] = [appointmentArr[i].time];
  //   }
  // }
  res.render("g2", { appointment: appointment, data: data });
};
