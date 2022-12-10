const express = require("express");
const path = require("path");
const ejs = require("ejs");
const mongoose = require("mongoose");
const homeController = require("./controllers/home");
const getGController = require("./controllers/getG");
const getG2Controller = require("./controllers/getG2");
const getAppointmentsController = require("./controllers/getAppointments");
const getExaminerController = require("./controllers/getExaminer");
const getDriversByTypeController = require("./controllers/getDriversByType");
const getDriversByNameController = require("./controllers/getDriversByName");
const createDriverResultController = require("./controllers/createDriverResult");
const getAllAppointmentsController = require("./controllers/getAllAppointments");
const getAppointmentsForDriverController = require("./controllers/getAppointmentForDriver");

const createAppointmentsController = require("./controllers/createAppointment");
const postG2Request = require("./controllers/postG2");
const findUser = require("./controllers/findUser");

const updateUser = require("./controllers/updateUser");
const loginController = require("./controllers/login");
const registerController = require("./controllers/register");
const signUpController = require("./controllers/signUp");
const signInController = require("./controllers/signIn");
const logoutController = require("./controllers/logout");
const expressSession = require("express-session");
const authMiddleware = require("./middlewares/authMiddleware");
const adminMiddleware = require("./middlewares/adminMiddleware");
const examinerMiddleware = require("./middlewares/examinerMiddleware");
const redirectIfAuthenticatedMiddleware = require("./middlewares/redirectIfAuthenticatedMiddleware");
global.loggedIn = null;
global.typeOfUser = null;

const app = express();

app.use(express.json());
app.use("*", (req, res, next) => {
  if (req.session) {
    loggedIn = req.session.userId;
  } else {
    loggedIn = req.session?.userId;
  }
  next();
});
app.use(
  expressSession({
    secret: "vaibh171nikis834",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const port = 4001;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.get("/", homeController);

app.get("/g", authMiddleware, getGController);

app.get("/g2", authMiddleware, getG2Controller);

app.get("/appointments", adminMiddleware, getAppointmentsController);

app.get("/examiner", examinerMiddleware, getExaminerController);

app.get("/getDriversByType", examinerMiddleware, getDriversByTypeController);

app.get("/getDriversByName", examinerMiddleware, getDriversByNameController);

app.get(
  "/createDriverResult",
  examinerMiddleware,
  createDriverResultController
);

app.post("/createAppointments", adminMiddleware, createAppointmentsController);

app.get("/getAppointments", adminMiddleware, getAllAppointmentsController);

app.get(
  "/getAppointmentForDriver",
  authMiddleware,
  getAppointmentsForDriverController
);

app.post("/g2", authMiddleware, postG2Request);

app.get("/find", authMiddleware, findUser);

app.post("/update", authMiddleware, updateUser);

app.get("/login", loginController);

app.get("/register", registerController);

app.post("/signUp", redirectIfAuthenticatedMiddleware, signUpController);

app.post("/signIn", redirectIfAuthenticatedMiddleware, signInController);

app.get("/logout", logoutController);

app.listen(port, () => {
  console.log("App listenning in 4001");
});
