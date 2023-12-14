const express = require("express");
const cors = require("cors");
const { connectDb } = require("./database/db");
const cookieParser=require('cookie-parser')
const morgan=require("morgan")
const server = express();
const authRoutes=require("./routes/Auth")
const productRoutes=require('./routes/Prouduct')
const userRoutes=require("./routes/User")
const cartRoutes=require("./routes/Cart")
const path = require('path')

const dotenv=require('dotenv').config({path:'.env'});


// databse connection
connectDb()
// middleware
server.use(express.json({ limit: '10mb' }));
server.use(cors());
server.use(cookieParser())
server.use(morgan("tiny"))



// route middlewares
server.use("/auth",authRoutes)
server.use("/products",productRoutes)
server.use("/users",userRoutes)
server.use("/cart",cartRoutes)



server.get("/", (req, res) => {
    res.status(200).json({'message':"running"});
});

server.listen(8080,'0.0.0.0',process.env.HOST,()=>{
    console.log('server [STARTED] ~ http://localhost:8000')
});
