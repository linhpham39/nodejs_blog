const Course = require('../models/Course');
const {multipleMongooseToObjects} = require('../../util/mongoose');
class SiteController{
    //get
    index(req,res, next){
        //res.render('home');
       /* viet bang callback  
       Course.find({}, function(err, courses){
            if(!err)    res.json(courses);
            else{
                next(error);        //khi có xảy ra, lọt vào 1 middleware ở bên ngoài
                //res.status(400).json({error: 'message error'});
            } 
        }); */
        //viet lai bằng promise
        Course.find({})
            .then(courses =>{
                //từ phiên bản 4.6 của handlebars, fix lại lỗi bảo mật nên không truy cập trực tiếp đcvào attribute object
                //=> để dùng đc các attribute của object thì có thể tạo ra 1 mảng các object khác, chuyển sang object thông thường = toObject() 
                //var courses = courses.map(course => course.toObject()) //xử lí riêng tại thư mục util
                res.render('home',{
                    courses: multipleMongooseToObjects(courses),
                }); 
            })
            //.catch(error => next(error));
            .catch(next);
    }

    //get search
    search(req, res){
        res.render('search');
    }
    //post method
    data(req, res){
        res.json(req.body);
    }
}

module.exports = new SiteController;