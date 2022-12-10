const mongoose = require("mongoose");
const DrivePost = require("./models/DrivePost");

mongoose.connect(
  "mongodb+srv://vaibhav:vaibhav@cluster0.tmlxcea.mongodb.net/admin?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

DrivePost.create(
  {
    firstname: "string",
    lastname: "string",
    age: "number",
  },
  (error, drivepost) => {}
);
