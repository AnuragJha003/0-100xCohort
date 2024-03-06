//for connecting to the database from the backend 

const mongoose=require("mongoose");

//connecting to mongodb
mongoose.connect("mongodb+srv://anurag:2bthSYxAs8yUmu3U@cluster0.am6th3d.mongodb.net/course_selling_app");

const AdminSchema=new mongoose.Schema({
    username:String,
    password:String
});

const UserSchema=new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin=mongoose.model('admin',AdminSchema);
const User=mongoose.model('user',UserSchema);
const Course=mongoose.model('Course',CourseSchema);

module.exports={
    Admin,
    User,
    Course
}