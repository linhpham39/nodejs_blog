class NewsController{
    //get method news
    index(req, res){
        res.render('news');
        console.log("REQ.PARAM=", req.params.slug);
    }
    
    //get /news:slug : slug là param truyền vào đường link /news
    //eg: .../news/html-css hoặc /news/react
    show(req, res){
        console.log("REQ.PARAM=", req.params.slug);
        res.send('NEW details!!!');
    }
}

module.exports = new NewsController;

//import bằng cú pháp: const newController = require('./NewsController');