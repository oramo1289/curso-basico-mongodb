//mongo client te deja conectarte al mongo database

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

//finaOneAndUpdate

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('58a4e15c0cf1ceadc4510493')
// },{
//   $set:{
//     completed: true
//   }
// },{
//   returnOriginal: false
// }).then((result)=>{
//   console.log(result);
// });
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('58a4b7fec27ab52e3c5806ac')
},{
  $set:{
    text:'Jeannette'
  },
  $inc:{age : 2}
  //update operator
},{
  returnOriginal: false
}).then((result)=>{
  console.log(result);
});

  //db.close();
});
