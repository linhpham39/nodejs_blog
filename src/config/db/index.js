const mongoose = require('mongoose')
//hoặc es6: import mongoose from 'mongoose'
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/my_education_dev',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connect successfully');
    }  catch(error){
        console.log('FAILL!!!!!!');
    } 
}


module.exports = {connect};