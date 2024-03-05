const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json());
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  const exists=ALL_USERS.filter((user)=> user.username === username
  && user.password === password);
  return exists.length >0;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
}); //this will give a jwt auth token in the head and return the value to you 

app.get("/users", function (req, res) {//now this get function expects an jwt auth token in its header which we r getting 
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);//the verify library from the jwt is used 
    const username = decoded.username;//get the username from the decoded thing 
    // return a list of users other than this username
    const otherusers=ALL_USERS.filter((user) => user.username!=username)
    res.json(otherusers);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)