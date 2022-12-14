const DrivePost = require("../models/DrivePost");
const AppointmentPost = require("../models/AppointmentPost");

module.exports = async (req, res, error) => {
  loggedIn = req.session.userId;
  const dateFor = req.body.date;
  const [year, month, day] = dateFor.split("-");

  const date = [
    month.toString().padStart(2, "0"),
    day.toString().padStart(2, "0"),
    year,
  ].join("-");

  await AppointmentPost.findOneAndUpdate(
    { time: req.body.time, date: date },
    {
      isTimeSlotAvailable: false,
    }
  );
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
