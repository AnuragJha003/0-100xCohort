const express=require("express");
const app=express();
//also add CORS in here so that the html can take data from here 
//backend for the sum task 
app.get("/sum",(req,res) => {
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    const sum=a+b;
    res.send(sum.toString());
});
//backend for the interest task 

app.get("/interest",(req,res)=>{
    const principal=parseInt(req.query.principal);
    const rate=parseInt(req.query.rate);
    const time=parseInt(req.query.time);
    const interest=(principal*rate*time)/100;
    const total=principal+interest;
    res.send({
        total:total,
        interest:interest,
    })
});