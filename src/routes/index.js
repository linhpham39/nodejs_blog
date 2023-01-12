//nạp file news vào index
const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');
function route(app){
    
    /* app.get('/news', (req, res)=>{
        res.render('news');
    }); */
    app.use('/news', newsRouter);
    app.use('/courses', courseRouter);
    app.use('/',siteRouter);
    /* app.get('search'), (req, res) => {
        res.render('search');
    };
    app.post('/search', (req, res)=>{
        res.send('');
    });
    app.get('/', (req, res)=>{
        res.render('home');
    }); */
}

module.exports = route;