const router = require('express').Router();
const BookController = require('../../controllers/BookController');

// Matches with '/api/books'
router.route('/')
  .get(BookController.findAll)
  .post(BookController.create);

// Matches with '/api/books/:id'
router
  .route('/:id')
  .get(BookController.findById)
  .put(BookController.update)
  .delete(BookController.remove);

module.exports = router;
