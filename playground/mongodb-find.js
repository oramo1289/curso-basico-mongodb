//mongo client te deja conectarte al mongo database
//const MongoClient = require('mongodb').MongoClient;
//escrito en deconstructure es6 modulos
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');
//toArray() es lo mismo que pretty, los convierte en lista para que sean leibles
//docs es el parametro de los documentos  y esta dentro de then que va a return el resultado
//then necesita de dos parmetros el primero es result y el segundo err
//si nada más pones uno va a asumir que es resultado y automaticamente va a crear el err para cuanlo lo llames más adelante
// docs = parametro result
  db.collection('Todos').find({
    _id: new ObjectID ('58a4cb550cf1ceadc450fd79')
  }).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) =>{
    console.log('Unable to fetch todos', err);
  });
  // db.collection('Users').find().count().then((count)=>{
  //   console.log(`Todos count: ${count}`);
  // }, (err) =>{
  //   console.log('Unable to fetch todos', err);
  // });
//stringify() convierte a JSON
//parse() convierte de JSON a parse
  db.collection('Users').find({text: 'Oscar'}).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    console.log('unable to show', err);
  });


  //db.close();
});
