const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email:String,
},{timestamps:true});

const UserCollection = mongoose.model("User",userSchema);
module.exports = UserCollection;