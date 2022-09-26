"use strict";
const book = {
    id: 1,
    title: 'my title',
    author: 'arromero'
};
const books2 = [];
function getBook() {
    return { id: 1, title: 'my title', author: 'arromero' };
}
const myBook = getBook();
function createBook(book) {
    return book;
}
const newBook = {
    id: 1,
    title: 'my title',
    author: 'arromero',
    coAuthor: 'stark'
};
createBook(newBook);
