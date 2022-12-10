module.exports = (req, res) => {
  let invalid = {
    conPass: false,
    invalPass: false,
  };
  loggedIn = req.session.userId;

  res.render("login", { invalid });
};
