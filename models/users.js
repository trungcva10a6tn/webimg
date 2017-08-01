var mongoose = require('mongoose');
var user = mongoose.Schema;

var userimg = new user({
    username: String,
    fullname: String,
    password: String,
    avatar: String,
    like: String,
    add_date: user.Types.Date,
    updated: user.Types.Date,
},{collection: "post"});

module.exports = mongoose.model('Post', userimg);