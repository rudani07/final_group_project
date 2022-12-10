module.exports = async (req, res) => {
  loggedIn = req.session.userId;

  res.render("index");
};
