const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();    
    let db = result.db("NewData");
    collection = db.collection('examData');
    let data  = await collection.find().toArray();
    console.log(data);
}

getData();
