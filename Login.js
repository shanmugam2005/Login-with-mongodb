/*var express= require("express")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")
const app=express()

app.use(bodyParser.json())
app.use(express.static("public"))
app.use(bodyParser.urlencoded({
    extended:true
}))


mongoose.connect("mongodb://0.0.0.0:27017/mydb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db=mongoose.connection;
db.on('error',()=>console.log("Connection error"));
db.once('open',()=>console.log("Connection Successfully"))

app.post('/sign_up',(req,res)=>{
    var phno=req.body.phno;
    var password=req.body.password;

    var data={
         "phno":phno,
         "password":password
    }
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record inserted Successfully")
    });
    return res.redirect("Signup_successful.html")
})
app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-origin":"*"
    })
    return res.redirect("index.html")

}).listen(3000);
console.log("Listening on port 30000");
*/

var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://0.0.0.0:27017/mydb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phno = req.body.phno;
    var password = req.body.password;

    var data = {
        "name": name,
        "email" : email,
        "phno": phno,
        "password" : password
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('signup_success.html')

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3000);


console.log("Listening on PORT 3000");