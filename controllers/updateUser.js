const DrivePost = require("../models/DrivePost");
const AppointmentPost = require("../models/AppointmentPost");

module.exports = async (req, res, error) => {
  loggedIn = req.session.userId;

  const dateFor = req.body.date;

  const [year, day, month] = dateFor.split("-");

  const date = [
    day.toString().padStart(2, "0"),
    month.toString().padStart(2, "0"),
    year,
  ].join("-");
  const appointment = await AppointmentPost.findOneAndUpdate(
    { time: req.body.time, date: date },
    {
      isTimeSlotAvailable: false,
    }
  );
  console.log("jjjjj");
  console.log(req.body);
  await DrivePost.findOneAndUpdate(
    { _id: req.session.userId },
    {
      ...req.body,
      car_Details: {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        numberPlate: req.body.numberPlate,
      },
    }
  );

  res.redirect("/");
};
