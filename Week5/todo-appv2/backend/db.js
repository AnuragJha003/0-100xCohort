const mongoose = require("mongoose");

// mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos
// .env
//Put ur own MongoDB connection string 
mongoose.connect("mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
}) //schema of the data stored 

const todo = mongoose.model('todos', todoSchema); //new model with the name todos and todoschema of the data going to the backedn 

module.exports = {
    todo
} //export this model 