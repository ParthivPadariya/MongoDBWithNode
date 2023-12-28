const collection = require('./mongodb');

const update = async () => {
    let result = await collection();
   
    // Change in first matched Parthiv Data
    // let data = await result.updateOne(
    //     {name:"Parthiv"},
    //     {$set:{id:"21dcs062",status:"InActive",aadharNO:"212563211"}}
    // )
    // console.log(data);

    let data = await result.updateMany(
        {name:"AAA"},
        {$set:{name:"Parthiv",id:"21dcs062", status:"InActive"}}
    )
    console.log(data);
} 

update();