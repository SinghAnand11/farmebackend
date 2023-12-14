require('dotenv').config({path:'.env'})
const mongoose=require("mongoose")

module.exports.connectDb=async ()=>{
try
{
    await mongoose.connect(process.env.MONGO_URI,{dbName:'farmecom'});
    console.log('db connected!');
}
catch(exp)
{
    console.log('error',exp.message);
}
}
