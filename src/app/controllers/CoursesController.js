const Course = require('../models/Course');
const {multipleMongooseToObjects, mongooseToObject} = require('../../util/mongoose');

class CoursesController{
    //get method
    show(req, res, next){
        /* Course.find({})
            .then((courses) =>{
                courses = courses.map(course => course.toObject())
                var slug = req.params.slug;
                var course = courses.find((course)=> course.slug == slug);
                console.log(course);
                res.render('course', course
                )
            })
            .catch(next); */
            Course.findOne({slug: req.params.slug})
                .then(course => res.render('courses/course', {
                    course: course.toObject()
                }))
                ;
    };
    //[GET] courses/create
    create(req, res){
        res.render('courses/create');
    } 
    //POST
    store(req, res){
        console.log("TesT",req.body);
        res.json(req.body);
    }
}

module.exports = new CoursesController;