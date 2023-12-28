const dbConnection = require('./mongodb');

// .then()
dbConnection().then((resp)=>{
    // console.log(resp);
    // console.log(resp.find().toArray());
    console.log(resp.find().toArray().then((data) => {
        console.log(data);
    }));
})

// async - await
/*
async function getData(){
    let data = await dbConnection();
    data = await data.find().toArray();
    console.log(data);
}
getData();
*/