const {User}=require("../db");

function usermiddleware(req,res,next){
    const username=req.headers.username;//username is passed in from the headers 
    const password=req.headers.password;

    User.findOne({
        username:username,
        password:password
    }) //finding this in the User db 
    .then(function(value){
        if(value){
            next();
        }else{
            res.status(403).json({
                msg:"User does not exist"
            })
        }
    })
}

module.exports=usermiddleware;