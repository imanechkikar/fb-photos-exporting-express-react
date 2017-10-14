/**
 * Created by IMAD on 11/10/2017.
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
module.exports=mongoose.model('User',new Schema({
    email:{type:String,index:true,unique:true},
    password:String
}));