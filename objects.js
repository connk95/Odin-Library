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

//show or hide inputs
const bookForm = document.getElementById('bookForm');
const newBook = document.getElementById('newBook');
newBook.addEventListener('click', () => {
    if (bookForm.style.visibility === "hidden") {
        bookForm.style.visibility = "visible"
    } else if (bookForm.style.visibility === "visible") {
        bookForm.style.visibility = "hidden"
    } else {
        bookForm.style.visibility = "visible"
    }
});

//allows user to close form
const closeForm = document.getElementById('closeForm');
closeForm.addEventListener('click', () => {
    bookForm.style.visibility = "hidden"
});

//use information from input in constructor and reset form
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
    document.getElementById("addTitle").value = "";
    document.getElementById("addAuthor").value = "";
    document.getElementById("addPages").value = "";
});

//push new object to array
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read) 
    myLibrary.push(newBook)
    displayObject();
};

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

        //create button to change read status
        const finished = document.createElement("button");
        const finishedCol = document.createElement("td");
        finished.type = "button"
        finished.innerHTML = "FINISHED"
        finished.className = "finishButton"
        finished.id = myLibrary.length - 1;
        finished.style.background="rgb(35, 175, 230)";
        finished.style.margin="10px"
        newRow.appendChild(finishedCol);
        finishedCol.appendChild(finished);
        finished.addEventListener('click', () => {
            if (myLibrary[finished.id].read === "") {
                myLibrary[finished.id].read = "read"
                newRead.innerText = myLibrary[finished.id].read;
            } else if (myLibrary[finished.id].read === "read") {
                myLibrary[finished.id].read = ""
                newRead.innerText = myLibrary[finished.id].read;
            };
        });

        //create button to remove this object from array and table
        const remove = document.createElement("button");
        const removeCol = document.createElement("td");
        remove.type = "button"
        remove.innerHTML = "REMOVE"
        remove.id = myLibrary.length - 1
        remove.style.background="rgb(222, 75, 75)";
        remove.style.marginRight="0px";
        newRow.appendChild(removeCol);
        removeCol.appendChild(remove);
        remove.addEventListener('click', () => {
            myLibrary.splice(remove.id, 1);
            const removeRow = document.getElementById(`bookRow${remove.id}`)
            removeRow.remove()
        });
        
        const table = document.getElementById("bodyRow");
        table.appendChild(newRow);
    }
};
