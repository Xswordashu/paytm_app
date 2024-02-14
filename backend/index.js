const express = require('express');
const bodyParser = require('body-parser');
const connectToDb = require('./db');
const userRouter = require('./routes/user')
const app = express();


connectToDb();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user" , userRouter);
app.get("/" , (req,res)=>{
    res.send("Welcome the page");
})
app.listen(8000, ()=>{
    console.log('Server running on port 8000');
})