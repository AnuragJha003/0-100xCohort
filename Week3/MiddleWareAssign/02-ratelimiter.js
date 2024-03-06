// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

const express = require('express');
const app = express();

let numberOfRequestsForUser={};
setInterval(()=>{
    numberOfRequestsForUser={};
},1000);//no of request for user will be reset to an empty every second 

app.user(function(req,res,next){
    //writing this in the headers section 
    const userid=req.headers["user-id"];//as it is given it will be passed in as headers
    if(numberOfRequestsForUser[userid]){
        numberOfRequestsForUser[userid]=numberOfRequestsForUser[userid]+1;
        if(numberOfRequestsForUser[userid]>5){
            res.status(404).send("no entry bro");
        }
        else{
            next();
        }
    }
    else{
        numberOfRequestsForUser[userid]=1;
        next();
    }
})





app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
  });
  
app.post('/user', function(req, res) {
    res.status(200).json({ msg: 'created dummy user' });
  });
  
module.exports = app;