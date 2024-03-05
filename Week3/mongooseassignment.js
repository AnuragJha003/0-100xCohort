const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://anurag:2bthSYxAs8yUmu3U@cluster0.am6th3d.mongodb.net/user_app",
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});

const app = express();
app.use(express.json());

/*function userExists(username, password) {
  // should check in the database
}*/
//should check in the database 
async function userExists(username,password){
    const user=await User.findOne({username:username});
    return user!== null;
}
//adding new people to the db 
app.post("/signup",function(req,res){
  const name=req.body.name;
  const username=req.body.username;
  const password=req.body.password;
  const userDetails=new User({
    name:name,
    username:username,
    password:password
  });
  userDetails.save().then(doc=>{
    res.send(doc)
  })
  .catch(err => console.log(err))
})
app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
    /*const otherusers=ALL_USERS.filter((user) => user.username!=username)
    res.json(otherusers);*/
    let people=[];
    const data= await User.find({username:username});
    if(data){
        const allusers=await User.find({});
        for(let i=0;i<allusers.length;i++){
            if(allusers[i]!== data[0].username){
                people.push(allusers[i]);
            }
        }
    }
    res.status(200).json(people);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);