const fs=require("fs");//file system 
const express=require("express"); //this u will have to bring from the net and bring in it here 
//express is the js subpart for preprocessing the backend part 
const bodyParser=require("body-parser")

//process.env is the environment variable storing the variable 
//middlewares 
const app=express();

app.use(bodyParser.json());  //parsing the body and params of the API in the routes in json format 
//to access or parse the body 
const port=3000;

app.get('/',function(req,res){
    res.send("Hello World");
})
app.post("/backendapi/conversation",function(req,res){
    const message=req.body.message;
    console.log(message);
    res.json({
        output:"2+2= 4"
    });
})
app.get("/route-handler",function(req,res){
    res.json({
        name:"harkirat",
        age:21
    })
})
app.post("/conversations",function (req,res){
    console.log(req.headers);
    res.send({
        msg:"2+2=4"
    })
})
app.listen(port,function(){
    console.log(`Example app listening on ${port}`);
})

//fetching data  async await 
/*fetch("url").then(async (s) => {
    const json =await s.json();
})*/
