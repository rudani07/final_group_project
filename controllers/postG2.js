const DrivePost = require("../models/DrivePost");

module.exports = async (req, res, error) => {
  const a = await DrivePost.create({
    ...req.body,
    car_Details: {
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      numberPlate: req.body.numberPlate,
    },
  });
  res.redirect("/");
};
