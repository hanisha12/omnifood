const mongoose = require("mongoose");
// var bcrypt = require('bcrypt'),
// SALT_WORK_FACTOR = 10;
// // var uniqueValidator = require('mongoose-unique-validator');
mongoose.connect("mongodb://localhost:27017/hanidb", { useNewUrlParser: true });
var conn= mongoose.Collection.createIndexes;

const registerSchema = new mongoose.Schema({
  name:{type:String,required: true},
  email:{type:String,unique: true,required: true},
  password:{type:String,required: true},
  pack: {type:[String],required: true},
  gender:{type:[String],required: true},
  birthday:{type:String,required: true},
});

// registerSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });
var Reg = mongoose.model("Reg", registerSchema);
module.exports = Reg;
