var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text:{
    type: String,
    require: true,
    minlength: 2,
    trim: false//se deshace de los espacios en blanco
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

module.exports = {Todo};
