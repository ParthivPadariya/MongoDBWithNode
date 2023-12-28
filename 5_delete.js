const collection = require('./mongodb');
 
const deleteData = async () => {
    const result = await collection();
    // THis Function delete first matched data
    // if data not present then also give acknowledge="true" so how can we deside
    // therefore we check deleteCOunt

    // Delete One
    // const data = await result.deleteOne({name:"Parthiv"})
    // console.log(data);

    // Delete Many
    let data = await result.deleteMany({name:"Parthiv"})

    if (data.acknowledged && data.deletedCount>0) {
        console.log("Data was Deleted");
    }
    else if(data.acknowledged && data.deletedCount == 0){
        console.log("Data Not Present");
    }
}

deleteData();