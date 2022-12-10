const path = require("path");
const express = require("express");
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { log } = require('console');
//đi vào thư mục node module để gọi thư viện
const app = express();
const port = 3000;

//import các route
          const route = require('./routes');

//http logger
        app.use(morgan('combined'));

//template engine: app này sẽ sử dụng template engine là handlebars và set name nó là 'hbs'
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
//tìm ra path của thư mục home.handlebars
//__dirname: path của thư mục chứa file đó
console.log('PATH: ', path.join(__dirname, 'resources/views'));
app.set('views', path.join(__dirname, 'resources/views'));

//để sử dung middleware
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

//cấu hình cho hình ảnh
app.use(express.static(path.join(__dirname, 'public')));

//route init
route(app);

/*
//định nghĩa route, thêm phần "/"(ở phần get) vào sau link local
app.get('/', (req, res) => {
  //res.render('home');
  res.render('home');
  //lấy file home và file main(for all)
  //lấy content của file home r append vào giữa file main
})

 app.get('/news', (req, res)=>{
  //request, response
  console.log('my query:',req);
  res.render('news');
}) 

app.get('/search', (req, res)=>{
  console.log(req.query);
  res.render('search');
})
app.post('/search', (req, res)=>{
  console.log(req.body);
  res.send('');
})
//req: request gửi lên server
//res: response : sever trả về cho mk
*/
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
