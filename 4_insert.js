const dbConnection = require('./mongodb');

const insert = async () => {
    const collection = await dbConnection();
    // collection.insertOne
    // const result = await collection.insertOne(
    //     // Insert Single Data
    //     {name:"Parthiv",id:"21dcs062",status:"INActive"}
    // )

    const result = await collection.insertMany(
        [
            {name:"Parthiv",id:"21dcs063",status:"InNActive"},
            {name:"Parthiv",id:"21dcs064",status:"Active"},
            {name:"Urvesh",id:"21dce009",status:"Active"},
            {name:"Darsh",id:"21ce030",status:"Active"},
            {name:"Meet",id:"21dcs064",status:"Active"},
            {name:"Umang",id:"21dce034",status:"InActive"}

        ]
    )

    // When this line execute also inser data so 
    // console.log(result);

    // soluction
    if(result.acknowledged){
        console.log("Data inserted");
    }
}

insert();