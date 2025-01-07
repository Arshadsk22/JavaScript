class book{
    Book;
    Author;

    constructor(book,author){
        this.Book = book;
        this.Author = author;
    }

    bookdetails(){
        console.log(`The ${this.Book} is written by ${this.Author}`);
    }
}
const myBook = new book('OnePiece','Ichiro Oda');
myBook.bookdetails();