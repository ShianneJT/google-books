import axios from 'axios';

export default {
    // Gets all books
    getBooks: function (query) {
        return axios.get('https://www.googleapis.com/books/v1/volumes', { params: { q: query } })
    },
    // Gets the book with the given id
    getSavedBooks: function () {
        return axios.get('/api/books');
    },
    getBookById(id) {
        return axios.get('/api/books' + id);
    },
    // Deletes the book with the given id
    deleteBook: function (_id) {
        return axios.delete('/api/books/' + _id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post('/api/books', bookData);
    }
};
