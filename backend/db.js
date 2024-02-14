const mongoose = require('mongoose');


const connectDb = () =>{
mongoose.connect('mongodb://localhost:27017/paytm_db')
.then(()=>{console.log('Connected to MongoDb')})
.catch((error)=>{console.log(error)});
}

module.exports = connectDb;

