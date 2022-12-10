const bcrypt = require("bcrypt");
const DrivePost = require("../models/DrivePost");

module.exports = async (req, res) => {
  bcrypt.hash(req.query.inputLicence, 10, async (error, hash) => {
    const drivePost = await DrivePost.find({
      inputLicence: hash,
    });
    res.render("g", { drivePost });
  });
};
