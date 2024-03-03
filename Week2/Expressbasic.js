const exp = require("constants");
const express=require("express");

/*function cs(n){
    let ans=0;
    for(let i=1;i<=n;i++){
        ans=ans+i;
    }
    return ans;
}
const app=express();

app.get("/",function(req,res){
    const n=req.query.n//the parameter for the function got via the request qeury 
    const ans=cs(n);
    //res.sendStatus(ans);
    res.send(ans.toString())//answer sent to the response 
})

app.listen(3000);//working on port no 3000 */
const app=express();

const users=[{
    name:'John',
    kidneys:[{
        healthy:false
    }]
}]

app.use(express.json());

app.get("/",function(req,res){
    const johnKidneys=users[0].kidneys;
    const numberofkidney=johnKidneys.length;
    let numberhealthy=0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberhealthy=numberhealthy+1;
        }
    }
    const numberunhealthy=numberofkidney-numberhealthy;
    res.json({
        numberofkidney,
        numberhealthy,
        numberunhealthy
    })
})//no of health unhealth and total kidneys 

app.post("/",function(req,res){
    const ishealthy=req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy
    })
    res.json({
        "msg":"Done"
    })
})
app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;//set to true put this new value into the api of the users
    }
    res.json({})
})
//removing all the unhealthy kidneys 
app.delete("/",function(req,res){
    const newkidney=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newkidney.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newkidney;
    res.json({msg:"Doneee"});
})

app.listen(3000);