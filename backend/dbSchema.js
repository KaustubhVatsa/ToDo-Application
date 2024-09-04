const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://Kaustubh:Kaustubh@explore.car1e.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    isCompleted:Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports= {
    todo
}