var mongoose = require('mongoose');

mongoose.Promise = global.Promise;//le decimos que use promises
mongoose.connect('mongodb://localhost:27017/TodoApp');//conecta con la base de datos

var Todo = mongoose.model('Todo', {
  text:{
    type: String,
    require: true,
    minlength: 1,
    trim: true//se deshace de los espacios en blanco
  },
  completed:{
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number,
    default: null
  }
});

//creando un modelo para que moongose sepa como ordenar y guardar la información

// var newTodo = new Todo({
//   text : 'Cook dinner'
// });
//puedes llamarla como quieras el nombre no es importante
//new crea una nueva instancia de la variable Todo

// var otherTodo = new Todo({
//   text : '  Cepillarse los dientes   ',
// });

// newTodo.save().then((doc)=>{
//   console.log('Save Todo', doc);
// }, (err)=>{
//   console.log('Unable to save Todo');
// });
//save esto en la database
//save va a guardar en la mongodb y save es una promesa lo que podemos es usar el metodo then()

// otherTodo.save().then((doc)=>{
//   console.log('Save Todo', doc);
// }, (err)=>{
//   console.log('Unable to save Todo');
// });

var User = mongoose.model('User', {
  email : {
    type : String,
    require : true,
    trim : true,
    minlength : 2
  }
});

var newEmail = new User({
  email: 'email@prueba.com'
});

newEmail.save().then((email)=>{
  console.log('Nuevo email', email);
}, (err)=>{
  console.log('No se entiende tu email', err);
});
