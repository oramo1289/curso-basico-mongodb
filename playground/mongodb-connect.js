//mongo client te deja conectarte al mongo database
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').insertOne({
//   //Todos es el nombre de la collection
//   //insertOne inserta un nuevo documento
//   text:'something to do',
//   completed: false
// }, (err, result)=>{
//   //callback que te dice si hay un error o si todo salio bien que es lo que tiene que hacer
//   if (err) {
//     return console.log('Unable to insert Todo', err);
//   }
//   console.log(JSON.stringify(result.ops, undefined, 2));
//   //ops va a tener todo los datos que acabo de insertar en este caso solo es el de insertOne
// });

// db.collection('Users').insertOne({
//   name:'Nuevo Usuario',
//   age: 27
// }, (err, result)=>{
//   if (err) {
//     return console.log('Unable to insert Users', err);
//   }
//   console.log(result.ops[0]._id.getTimestamp());
//   //con esto puedo saber en el momento exacto en el que se creo el documento
// });

  db.close();
});
//el TodoApp es la databest a la que me estoy conectando, test es la que me  da por default pero puedo crear otra
//dos argumentos, primero string es el url, heroku url, o amazon url, etc
//funcion de callback function
