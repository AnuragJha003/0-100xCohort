const express=require("express");
const app=express();
//Authentication and input validation without middleware 

/*function usernamevalidator(username,password){
    if(username!="Anurag" && password!="pass"){
        res.status(403).json({
            msg:"User does not exist",
        });
        return;
    }
}

function kidneyvalidator(kid){
    if(kid!=1 && kid!=2){
        res.status(411).json({
            msg:"Wrong Inputs",
        });
        return;
    }
}
app.get("/health-checkup",function(req,res){
    const kid=req.query.kid;
    const username=req.headers.username;
    const password=req.headers.password;

    if(username!="Anurag" && password!="pass"){
        res.status(403).json({
            msg:"User does not exist",
        });
        return;
    }

    if(kid!=1 && kid!=2){
        res.status(411).json({
            msg:"Wrong Inputs",
        });
        return;
    }
    res.send("Kidney is healthy");
});
//kidney replacement function 
app.put("/replace-kidney",function(req,res){
    const kid=req.query.kid;
    const username=req.headers.username;
    const password=req.headers.password;

    if(!usernamevalidator(username,password)){
        res.status(403).json({
            msg:"User not exists",
        });
        return;
    }
    if(!kidneyvalidator(kid)){
        res.status(411).json({
            msg:"wrong inputs",
        });
        return;
    }
    res.send("Kidney is healthy");
});

//now using middlewares 
function userMiddleware(req,res,next){
    if(username!="harkirat" && password!="pass"){
        res.status(403).json({
            msg:"Incorrect inputs",
        });
    }
    else{
        next();
    }
};
function kidneyMiddleware(req,res,next){
    if(kid!=1 && kid!=2){
        res.status(403).json({
            msg:"Incorrect inputs",
        });
    }
    else{
        next();
    }
};
app.get("/health-checkup",userMiddleware,kidneyMiddleware,function(req,res){
    //can write the code in here logic along with the middleware already implemented
    res.send("Your health is healthy");
});
//similar u can add to all the routes in here as well as the middlewares in there 
*/
const z=require("zod");//ZOD being called in 

//const schema=z.array(z.number());//the schema u r passing would be an areay of number which u r expecting in there 

app.use(express.json());//for parsing the body of the request
app.post("/health-checkup",function(req,res){
    /*const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;
    res.send("you have "+ kidneyLength+"kidneys");*/
    //tryng using ZOD for input validations in here 
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys);//safeparse method for travelling the response 
    //if(response.success) is true then sahi h else input is not validated in here
    res.send({
        response
    });
});//post request attempt 

//creating a zod schema of ur choice and then validating that 

const schema=z.object({
    email:z.string(),
    password:z.string(),
    country:z.literal("IN").or(z.literal("US"))
}) //creating a zod schema object 

//adding global catches middleware to handle the exception 
app.use((error,req,res,next) =>{
    res.status(500).send("An internal server error occured");
});

//ZOD for better input validation and easier to scale input validation library 

app.listen(3000);