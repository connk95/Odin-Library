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

myLibrary.push(theHobbit);


const bookForm = document.getElementById('bookForm');
//open or close the form
const newBook = document.getElementById('newBook');
newBook.addEventListener('click', () => {
    if (bookForm.style.visibility === "hidden") {
        bookForm.style.visibility = "visible"
    } else {
        bookForm.style.visibility = "hidden"
    } 
});

// const closeForm = document.getElementById('closeForm');
// closeForm.addEventListener('click', () => {
//     if (bookForm.style.visibility === "hidden") {
//         bookForm.style.visibility = "visible"
//     } else {
//         bookForm.style.visibility = "hidden"
//     }
// });

//use form data as arguments to use in Book method

const closeForm = document.getElementById('closeForm');
closeForm.addEventListener('click', () => {
    bookForm.style.visibility = "hidden"
});

const addBook = document.getElementById('addBook');
addBook.addEventListener('click', () => {
    title = document.getElementById("newTitle").value;
    author = document.getElementById("newAuthor").value;
    pages = document.getElementById("newPages").value;
    if (document.getElementById("readCheck").checked = true) {
        read = "read"
    } else {
        read = ""
    };
    addBookToLibrary(title, author, pages, read);
    console.log(myLibrary);
});

//push new object to array
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, + author + pages + read) 
    myLibrary.push(newBook) //push(title)?
    console.log(myLibrary);
};