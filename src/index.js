const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require("express-handlebars");
const { log } = require('console');
//đi vào thư mục node module để gọi thư viện
const app = express();
const port = 3000;

//http logger
app.use(morgan('combined'));

//template engine: app này sẽ sử dụng template engine là handlebars và set name nó là 'handlebars'
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
//tìm ra path của thư mục home.handlebars
//__dirname: path của thư mục chứa file đó
console.log('PATH: ', path.join(__dirname, 'resources/views'));
app.set('views', path.join(__dirname, 'resources/views'));

//định nghĩa route, thêm phần "/"(ở phần get) vào sau link local
app.get('/', (req, res) => {
  //res.render('home');
  res.render('home');
  //lấy file home và file main(for all)
  //lấy content của file home r append vào giữa file main
})



app.get('/new', (req, res)=>{
  res.render('new');
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

