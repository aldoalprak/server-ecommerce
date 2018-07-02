const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema({
    email: String,
    password: String
},{timestamps:true})

const UserModel = mongoose.model('User',userSchema)

module.exports = UserModel