var user = {name:'Oscar', age: 25};
var {name} = user;
console.log(name);
//destructure es6
//estoy deconstruyendo el objeto y al hacer a la variable name le estoy dando el valor del nombre del objeto user

const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
