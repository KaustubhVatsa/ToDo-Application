const express = require("express");
const { createTodo, updateTodo } = require("./valid");
const { todo } = require("./dbSchema");
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors())

app.post("/todos", async function(req,res){
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"Wrong inputs"
        })
        return ;
    }
    // put in mongodb 
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        iscompleted:false
    })
    res.json({
        msg:"Todo Activity Created!"
    })

})

app.put("/todos",async function(req,res){
    const createPayload = req.body
    const parsedPayload = updateTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"Wrong inputs for id"
        })
        return ;
    }
    // update todo in mongo
    await todo.update({
        _id:req.body.id
    },{
        iscompleted:true
    })
    res.json({
        msg:"Todo Activity Marked As Completed "
    })

})

app.get("/todos", async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.delete("./todos",async function(req,res){
    const id = req.body._id;
    const result = await todo.findByIdAndDelete(id);
    if (!result){
        res.status(401).json("Todo Not Found")
    }
    res.json({
        msg:"Todo Activity Deleted!"
    })
})

app.listen(4000);
