const mongoose =require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
 name:{
    type:String,
    required:[true,"Please provide Valid Name"]
 },
 email:{
    type:String,
    required:[true,"Please provide Valid email"]
 },
 password:{
    type:String,
    required:[true,"Please provide Valid Password"]
 },
 role:{
    type:String,
    required:[true,"Please provide Valid Role"],
        default: 'user'
 },
},{timestamps:true});
const UserModel = mongoose.model('User',UserSchema);
module.exports = UserModel