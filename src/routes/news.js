var express = require('express');
//tuyến đường nào cx nạp express vào
const router = express.Router();
//cau hinh cho path
const newsController = require('../app/controllers/NewsController');
router.use('/:slug', newsController.show);
//de cai slug truoc cai / vi tuyen duong se tim kiem tu tren xuong  
router.use('/', newsController.index);
/*bth laf router.use('/news', (req, res)=>{
    res.render();
})*/
module.exports = router;

