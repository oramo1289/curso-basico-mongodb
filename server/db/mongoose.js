var mongoose = require('mongoose');

mongoose.Promise = global.Promise;//le decimos que use promises
mongoose.connect('mongodb://localhost:27017/TodoApp');//conecta con la base de datos

module.exports = {
  mongoose : mongoose //estoy importando el objeto sin nombre cuya propiedad es mongoose, este es igual a la variable mongoose
  // mongoose
};
// y en es6 las propiedades iguales a la variable en nobre se puede omitir solo poniendo el nombre
//Asi estableces la conexion a mongodb
