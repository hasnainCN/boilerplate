var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../models/users');
/* GET home page. */
router.get('/', function (req, res, next) {
  let userInstance = new Users({
    name: 'hasnain',
    email: 'hasnain@gmail.com',
  });
  userInstance.save((err, data) => {
    if (err) {
      console.log('some thing went wrong');
    } else {
      console.log(data);
    }
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
