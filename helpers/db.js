const mongoose=require('mongoose');

module.exports=()=>{
     mongoose.connect(process.env.DB_STRING);

    mongoose.connection.on('open',()=>{
        console.log("Mongodb connected")
    })
    mongoose.connection.on('error',(err)=>{
        console.log("Mongodb connected : ",err)
    })
    mongoose.Promise=global.Promise;

}
