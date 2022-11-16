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

// const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295 pages", "read");
// myLibrary.push(theHobbit);

// console.log(theHobbit.author);

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
    const readCheck = document.getElementById("readCheck");
    if (readCheck.checked == false) {
        read = ""
    } else if (readCheck.checked == true) {
        read = "read"
    };
    addBookToLibrary(title, author, pages, read);
});

//push new object to array
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read) 
    myLibrary.push(newBook)
    //removeObject();
    displayObject();
    console.log(newBook);
    console.log(myLibrary);
};

//erase table and refresh with new data
//display object in table
function displayObject() { 
    for (let i = myLibrary.length - 1; i < myLibrary.length; i++) {
        const newRow = document.createElement("tr");
        newRow.id = `bookRow${myLibrary.length - 1}`
        
        const newTitle = document.createElement("td");
        newTitle.innerText = myLibrary[i].title;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement("td");
        newAuthor.innerText = myLibrary[i].author;
        newRow.appendChild(newAuthor);

        const newPages = document.createElement("td");
        newPages.innerText = myLibrary[i].pages;
        newRow.appendChild(newPages);

        const newRead = document.createElement("td");
        newRead.innerText = myLibrary[i].read;
        newRead.id = myLibrary[i];
        newRow.appendChild(newRead);

        const finished = document.createElement("button");
        finished.type = "button"
        finished.innerHTML = "Finished"
        finished.className = "finishButton"
        finished.id = myLibrary.length - 1;
        newRow.appendChild(finished);
        finished.addEventListener('click', () => {
            myLibrary[finished.id].read = "read"
            newRead.innerText = myLibrary[finished.id].read;
        });

        const remove = document.createElement("button");
        remove.type = "button"
        remove.innerHTML = "Remove"
        remove.id = myLibrary.length - 1
        newRow.appendChild(remove);
        remove.addEventListener('click', () => {
            myLibrary.splice(remove.id, 1);
            const removeRow = document.getElementById(`bookRow${remove.id}`)
            console.log(removeRow);
            removeRow.remove()
        });
        
        const table = document.getElementById("bookTable");
        table.appendChild(newRow);
    }
};

// const finishRead = document.querySelectorAll('finishButton');
// finishRead.addEventListener('click', () => {
//     //title.read = "read"
//     if (finishButton.id = title) {
//         title.read = "read"
//     }
// });
