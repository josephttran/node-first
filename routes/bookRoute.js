const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');

router.post('/create', bookController.bookCreate);

router.get('/read', bookController.bookRead);

module.exports = router;