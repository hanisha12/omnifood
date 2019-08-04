const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
var conn= mongoose.Collection;

const testSchema = new mongoose.Schema({
  name:String,
  email:String,
  feedback:String,
  findUs: [String]
});
var User = mongoose.model("User", testSchema);
module.exports = User;
