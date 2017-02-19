const express = require('express');
var bodyParser = require('body-parser');

//const mongoose = require('./db/mongoose.js').mongoose;
var {mongoose} = require('./db/mongoose');
// {mongoose} es crear una variable local con el nombre mongoose que es igual a
// la propieda mongoose dentro del objeto, y el objeto va a ser el archivo mongoose.js
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
  var todo = new Todo({
      text: req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  }, (err)=>{
    res.status(400).send(err);
  })
});

app.get('/todos', (req, res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (err)=>{
    res.status(400).send(err);
  })
});
app.listen(3000, ()=>{
  console.log('started on port 3000');
});

module.exports ={app};
