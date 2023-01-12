const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.post('/search/data', siteController.data);
router.get('/search', siteController.search);
router.get('/', siteController.index);
router.get('/:slug', siteController.index);

module.exports = router;