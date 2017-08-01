var mongoose = require('mongoose');
var post = mongoose.Schema;

var PostImg = new post({
    id_user: String,
    content: String,
    comment: String,
    link_img: String,
    likes: String,
    add_date: post.Types.Date,
    updated: post.Types.Date,
},{collection: "post"});

module.exports = mongoose.model('Post', PostImg);