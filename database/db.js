require('dotenv').config({path:'.env'})
const mongoose=require("mongoose")

module.exports.connectDb=async ()=>{
try
{
    await mongoose.connect('mongodb+srv://anandjayara:Dbs%40123456@cluster0.kjdio3z.mongodb.net/',{dbName:'farmecom'});
    console.log('db connected!');
}
catch(exp)
{
    console.log('error',exp.message);
}
}
