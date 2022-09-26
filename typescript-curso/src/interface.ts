interface Book{
    id: number,
    title: string,
    author: string,
    coAuthor?: string,
    isLoan?: (id: number) => void
}

const book:Book = {
    id: 1,
    title: 'my title',
    author: 'arromero'
}

const books2: Book[] = []

function getBook(): Book {
    return {id:1, title: 'my title', author: 'arromero' }
}

const myBook = getBook()

function createBook(book: Book):Book{
    return book
}

const newBook:Book = {
    id:1, 
    title: 'my title',
    author: 'arromero',
    coAuthor: 'stark'

}

createBook(newBook)