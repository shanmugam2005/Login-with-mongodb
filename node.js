//const express =require('express')
const mongoose=require('mongoose')
//const app=express()

mongoose.connect("mongodb://0.0.0.0:27017/shan")
.then(()=>{
    console.log("mongo success")
})
.catch(()=>{
     console.log("error")
})

const tutSchema=new mongoose.Schema({
       name:{
        type:String,
        required:true
       }
})
const collection=new mongoose.model('tut',tutSchema)

data=[{
    name:"shan"
},
{
    name:"mugaum"
}

]
collection.insertMany(data)