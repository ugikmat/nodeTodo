var express = require('express');
var router = express.Router();

//bring model
let Todo = require('../models/todo');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', {
  //   title: 'TODO APP',
  // });
  Todo.find({},function(err,todo){
    if(err)console.log(err);
    else{
      res.render('index', {
        title: 'TODO APP',
        finish:'Finished',
        todos:todo
      });
    }
  });
});

module.exports = router;
