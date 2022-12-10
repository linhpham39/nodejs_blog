class NewsController{
    //get method news
    index(req, res){
        res.render('news');
    }
    
    //get /news:slug : slug là param truyền vào đường link /news
    //eg: .../news/html-css hoặc /news/react
    show(req, res){
        res.send('NEW details!!!');
    }
}

module.exports = new NewsController;

//import bằng cú pháp: const newController = require('./NewsController');