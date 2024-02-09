const mongoose = require("mongoose");

const connectDataBase =()=>{

    mongoose.connect(process.env.MONGODB_URI)
    .then((data)=>{
        console.log(data.connection.host);
    })
    .catch((error)=>{
        console.log(error.message);
    })
    
}

module.exports = connectDataBase;