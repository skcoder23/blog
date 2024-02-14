const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 4000;

// middleware 
app.use(express.json());
// mongodb connection 
const getConnection = require('./db/conn');

// userSchema 
const User = require("./model/user.model");
getConnection();

app.get('/', (req, res) => {
    res.send("server is live");
});

app.post('/api/add', async (req, res) => {
    const { name, password } = req.body;

        const userdata = await new User({name,password});
        const user_response = await userdata.save()
        console.log(user_response);
        res.send(user_response);
})

app.get("/api/users",async(req,res)=>{
    const users = await User.find();
    res.send(users);
});


// find by id 

app.get("/api/user",async(req,res)=>{
    const id = req.query;
    const users = await User.find(id)
    res.send(users);
})

app.patch("/api/update/:id",async(req,res)=>{
    const id = req.params.id;
    // const id = "65c970928c4e58f5a4f21a33";
    const user = await User.findByIdAndUpdate(id,{name:"Rohit"});
    if(user){
        console.log("user updated")
        // res.send(<h1>User updated </h1>)
    }
    console.log(user)
    res.send(user)
})

app.listen(port, () => {
    console.log("SERVER IS RUNNING");
});