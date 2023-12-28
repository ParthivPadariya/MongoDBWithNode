const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);

async function dbConnection(){
    let result = await client.connect();
    db = result.db('NewData');
    return db.collection('examData');
}

// Function return Promise
// dbConnection();
// console.log(dbConnection());

// Promise solve 2 method
// .then()
// async-await

// 1
// dbConnection().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data);
//     });
// })

// Explainaton: 
// dbConnection().then((resp)=>{
    // console.warn(resp);
    // toArray is Also return Promise so use .then()
    // console.log(resp.find().toArray());
    // console.log(resp.find().toArray().then( (data) => {
    //     console.log(data);
    // }));

//  Find which name is meet
//     console.log(resp.find({name:"Meet"}).toArray().then( (data) => {
//         console.log(data);
//     }));
// });


// 2 async await

const main = async () => {
    // return Promise so we make function async
    let data = await dbConnection();
    // console.log(data);
    // toArray also return promise so awiat
    data = await data.find().toArray();
    console.log(data);
}
main();