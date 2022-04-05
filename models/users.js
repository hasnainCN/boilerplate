var mongoose = require('mongoose');
var Schema = mongoose.Schema; // <-- EDIT: missing in the original post
var UsersSchema = new Schema({
  name: String,
  email: String,
  date: Date,
});
var Users = mongoose.model('Users', UsersSchema);
module.exports = Users;
