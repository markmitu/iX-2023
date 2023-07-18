
export class Book {
    constructor(title_in, author_in, isbn_in) {
        this.title = title_in;
        this.author = author_in;
        this.isbn = isbn_in;

    }

    static from_JSON(json_book) {
        return new Book(json_book.title, json_book.author, json_book.isbn);
    }
}