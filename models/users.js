var mongoose = require('mongoose');
var user = mongoose.Schema;

var userimg = new user({
    username: String,
    fullname: String,
    password: String,
    avatar: String,
    followers: String
},{collection: "post"});

module.exports = mongoose.model('UserImg', userimg);