const DrivePost = require("../models/DrivePost");
module.exports = (req, res, next) => {
  DrivePost.findById(req.session.userId, (error, user) => {
    if (error || !user || user.userType != "driver") return res.redirect("/");
    next();
  });
};
