const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/userdata";

const getConnection = async ()=>{
    try{
        const connection = await mongoose.connect(uri);
        if(connection){
            console.log('Database connected');
        }
    }catch(e){
        console.log(`The error is : ${e}`)
    }
} 
module.exports = getConnection;

