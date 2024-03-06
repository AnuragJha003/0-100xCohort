const {Router}=require("express");
const router=Router();
const usermiddleware=require("../middlewares/user.js");
const {User,Course}= require("../db");
const {default:mongoose}=require("mongoose");

//User routes 
router.post("/signup",(req,res)=>{
    //implement user signup logic and adding to user db 
    const username=req.body.username;
    const password=req.body.password;//passing these 2 values as the body 
    User.create({
        username,
        password
    });//creating a new entry in the user db 
    res.json({
        message:"User created successfully"
    })
});
router.get("/courses",async(req,res) => {
    const response=await Course.find({});
    //find everything from the course db available 
    res.json({
        courses:response
    })
});

router.post("/courses/:courseid",usermiddleware,async(req,res)=>{
    //implementing course purchase logic in here 
    const courseid=req.params.courseid;
    const username=req.headers.username;

    await User.updateOne({ //updating corresponding to the user the purchasedcourse list of the given yuser 
        //push kr rhe h 
        username:username
    },{
        "$push":{
            purchasedCourses:courseid
        }
    })
    res.json({
        message:"Purchase Complete!"
    })
});

router.get("/purchasedCourses",usermiddleware,async(req,res)=>{
    //implemeting fetching purchased courses logic 
    const user=await User.findOne({
        username:req.headers.username
    });
    console.log(user.purchasedCourses);//list of the course purchased by this user 
    //in json format 
    const courses=await Course.find({
        _id:{
            "$in":user.purchasedCourses //matching the id of the course in the Course db from the list of ids user has purchased 
        }
    });

    res.json({
        courses:courses
    })
});

module.exports=router;