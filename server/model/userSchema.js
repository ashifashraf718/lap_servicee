const mongoose=require("mongoose")
const userSchemaData=new mongoose.Schema({
    Username:{type:String,required:true},
    Email:{type:String,required:true,unique:true},
    Place:{type:String,required:true},
    Age:{type:String,required:true},
    Password:{type:String,required:true}

},{timestamps:true})
module.exports=mongoose.model("database",userSchemaData) 