const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');

router.post('/create', bookController.bookCreate);
router.get('/read', bookController.bookRead);
router.get('/:id/read', bookController.bookReadOne);
router.put('/:id/update', bookController.bookUpdate);
router.delete('/:id/delete', bookController.bookDelete);

module.exports = router;