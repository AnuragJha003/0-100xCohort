const express = require("express");
const adminMiddleware = require("../middlewares/admin.js");
const { Admin, Course } = require("../db");
const router = express.Router();

router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;  //admin signup logic in here

    // check if a user with this username already exists
    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        message: 'Admin created successfully'
    })
    
});

router.post('/courses', adminMiddleware, async (req, res) => {//admin functionality of creating a new course user can only fetch and purchase course and see to himself 
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;//according to the schema described for the course data
    // zod
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })//creating a new course corresponding to it 

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })

});


module.exports = router;

