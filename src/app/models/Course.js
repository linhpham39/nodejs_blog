const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Course = new Schema({
    name:{type: String, maxLength: 255 },
    description: {type: String, maxLength: 600},
    //date: Date,
    image: {type: String, maxLength: 255},
    createdAt :{type: Date, default: Date.now},
    updatedAt:{type:String, default: Date.now}
});

module.exports = mongoose.model('Course',Course, 'courses');