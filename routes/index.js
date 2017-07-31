var express = require('express');
var router = express.Router();


var multer  = require('multer');

var Post = require('../models/posts');
/* GET home page. */

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/uploads/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/uploads/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});

var upload = multer({storage: storage});

router.get('/', function(req, res, next) {
  Post.find({id_user: 1},function (err, posts) {
      res.json({post: posts});
  });
});
router.post('/new',upload.single('feature'), function(req, res, next) {
    Post.create({
        id_user: 1,
        content: req.body.content,
        comment: [],
        link_img: "2.jpg",
        add_date: Date.now(),
        updated: Date.now()
    }, function(err){
        if(!err){
            res.json({message: 'created successfully'});
        } else {
            res.json({message: 'Error creating'});
        }
    });
});
router.get('/@:id_user', function(req, res, next) {
  var id= parseInt(req.params.id_user);
    Post.find({id_user: id},function (err, posts) {
        res.json({post: posts, id: id});
    });
    //res.json({post: req.params.id_user});
});
module.exports = router;