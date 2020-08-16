const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    password: String,
    age: String
},{
    collection: 'User'
})

module.exports = mongoose.model('User', UserSchema);
