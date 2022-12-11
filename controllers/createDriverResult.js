const DrivePost = require("../models/DrivePost");

module.exports = async (req, res, error) => {
  loggedIn = req.session.userId;

  console.log(req);
  await DrivePost.findOneAndUpdate(
    { firstname: req.body.firstname },
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
