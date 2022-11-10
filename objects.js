let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return (title + author + ", " + pages + ", " + read)
    }
};

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295 pages", "read");

console.log(theHobbit.info());

myLibrary.push(theHobbit);

console.log(myLibrary);

//open or close the form
const newBook = document.getElementById("newBook");
newBook.addEventListener("click", () => {
    const bookForm = document.getElementById("bookForm");

    if (bookForm.style.display === "none") {
        bookForm.style.display = "block";
    } else {
        bookForm.style.display = "none";
    }
});

//use form data as arguments to use in Book method
const addBook = document.getElementById("addBook");
addBook.addEventListener("click", () => {
    //title = document.getElementById(text input)
    //author = document.getElementById(text input)
    //pages = document.getElementById(num input)
    //read = document.getElementById(checkbox)
    addBookToLibrary(title, aurthor, pages, read);
});

//push new object to array
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, + author + pages + read) 
    myLibrary.push(newBook)
}