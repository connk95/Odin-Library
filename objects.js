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

console.log(theHobbit.author);

//show or hide inputs
const bookForm = document.getElementById('bookForm');

const newBook = document.getElementById('newBook');
newBook.addEventListener('click', () => {
    if (bookForm.style.visibility === "hidden") {
        bookForm.style.visibility = "visible"
    } else {
        bookForm.style.visibility = "hidden"
    } 
});

const closeForm = document.getElementById('closeForm');
closeForm.addEventListener('click', () => {
    bookForm.style.visibility = "hidden"
});

//use information from input in constructor
const addBook = document.getElementById('addBook');
addBook.addEventListener('click', () => {
    title = document.getElementById("addTitle").value;
    author = document.getElementById("addAuthor").value;
    pages = document.getElementById("addPages").value;
    if (document.getElementById("readCheck").checked = true) {
        read = "read"
    } else if (document.getElementById("readCheck").unchecked = false) {
        read = " "
    };
    addBookToLibrary(title, author, pages, read);
});

//push new object to array
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read) 
    myLibrary.push(newBook.title)
    displayObject(newBook);
};

//display object in table
function displayObject(newBook) {
    //for (let i = 0; i < myLibrary.length; i++) {
        const newRow = document.createElement("tr");
        
        const newTitle = document.createElement("td");
        newTitle.innerText = newBook.title;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement("td");
        newAuthor.innerText = newBook.author;
        newRow.appendChild(newAuthor);

        const newPages = document.createElement("td");
        newPages.innerText = newBook.pages;
        newRow.appendChild(newPages);

        const newRead = document.createElement("td");
        newRead.innerText = newBook.read;
        newRow.appendChild(newRead);

        const finished = document.createElement("button");
        finished.type = "button";
        finished.innerHTML = "Finished"
        finished.className = "finishButton"
        finished.id = newBook.title;
        newRow.appendChild(finished);
        
        const table = document.getElementById("bookTable");
        table.appendChild(newRow);
    //}
};

const finishRead = document.querySelectorAll('finishButton');
finishRead.addEventListener('click', () => {
    //title.read = "read"
    if (finishButton.id = title) {
        title.read = "read"
    }
});
