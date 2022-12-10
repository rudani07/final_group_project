const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  date: { type: String },
  time: { type: String },
  isTimeSlotAvailable: { type: Boolean, default: true },
});
const AppointmentPost = mongoose.model("AppointmentPost", AppointmentSchema);

module.exports = AppointmentPost;
