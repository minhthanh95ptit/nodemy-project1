const mongoose = require('mongoose');

let connectDB = () =>{
    return mongoose.connect('mongodb://localhost/project1',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB;

