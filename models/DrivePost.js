const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const DriveSchema = new Schema({
  firstname: { type: String, default: null },
  lastname: { type: String, default: null },
  inputLicence: { type: String, default: null },
  sinNumber: { type: String, default: null },
  age: { type: Number, default: 0 },
  birthDate: { type: Date, default: null },
  datePosted: { type: Date, default: new Date() },
  username: String,
  userType: String,
  password: String,
  testType: String,
  result: String,
  date: { type: String, default: null },
  time: { type: String, default: null },
  firstTime: { type: Boolean, default: true },
  appointmentId: { type: String, default: null },
  car_Details: {
    make: { type: String, default: null },
    model: { type: String, default: null },
    year: { type: Number, default: 0 },
    numberPlate: { type: String, default: null },
  },
});
DriveSchema.pre("save", function (next) {
  const drive = this;
  bcrypt.hash(drive.password, 10, (error, hash) => {
    drive.password = hash;
    next();
  });
});

DriveSchema.pre("save", function (next) {
  const drive = this;
  bcrypt.hash(drive.inputLicence, 10, (error, hash) => {
    drive.inputLicence = hash;
    next();
  });
});
const DrivePost = mongoose.model("DrivePost", DriveSchema);

module.exports = DrivePost;
