var express = require('express');
var router = express.Router();

//Get Model
let Todo = require('../models/todo');

//get Single Todo Route
router.get('/:id',function(req,res){
    Todo.findById(req.params.id, function(err, todo){
        if(err){
            console.log(err);
        }else{
            let refEdit = '/todos/edit/'+req.params.id;
            let ref = todo.finish?'/todos/unfinish/'+todo._id:'/todos/finish/'+todo._id;
            let stats = todo.finish?'Belum Selesai':'Selesai';
            res.render('todo',{
                title:todo.title,
                todo:todo,
                ref:ref,
                refEdit:refEdit,
                stats:stats
            });
            console.log(todo);
        }
    });
});

module.exports = router;