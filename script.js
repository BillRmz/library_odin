//selectors
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const noPages = document.querySelector("#pages");
const state = document.querySelector("#status");
const btnAdd = document.querySelector(".btn");
const table = document.querySelector("#book-list");

//event listeners
btnAdd.addEventListener("click", addBookToLibrary);
table.addEventListener("click", deleteCheck);

//Store books
let myLibrary = [];

//object constructor
function Book(title, author, noPages, read) {
  this.title = title;
  this.author = author;
  this.noPages = noPages;
  this.read = read;
}

Book.prototype.bookInfo = function () {
  return `${this.title} by ${this.author}, ${this.noPages}, is ${this.read}.`;
};

function addBookToLibrary(e) {
  e.preventDefault();
  let status;
  if (state.value === "not-read") {
    status = false;
  } else if (state.value === "read") {
    status = true;
  }

  const book = new Book(
    bookTitle.value,
    bookAuthor.value,
    noPages.value,
    status
  );
  myLibrary.push(book);
  bookTitle.value = "";
  bookAuthor.value = "";
  noPages.value = "";
  state.value = "";
  showBooks();
}

function showBooks() {
  const bookList = document.querySelector("#book-list");
  bookList.textContent = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const bookRow = document.createElement("tr");
    bookList.appendChild(bookRow);

    //book title
    const bookTitle = document.createElement("td");
    bookTitle.textContent = myLibrary[i].title;
    bookRow.appendChild(bookTitle);

    //Author
    const author = document.createElement("td");
    author.textContent = myLibrary[i].author;
    bookRow.appendChild(author);

    //Pages
    const pages = document.createElement("td");
    pages.textContent = myLibrary[i].noPages;
    bookRow.appendChild(pages);

    //status
    const status = document.createElement("td");
    if (myLibrary[i].read === false) {
      status.innerHTML = '<i class="fa-solid fa-x"> </i>';
    } else if (myLibrary[i].read === true) {
      status.innerHTML = '<i class="fa-solid fa-check"> </i>';
    }
    bookRow.appendChild(status);

    //delete
    const btnDel = document.createElement("td");
    btnDel.innerHTML = '<i class="fa-solid fa-trash"></i>';
    btnDel.classList.add("del");
    bookRow.appendChild(btnDel);
  }
  totalBooks();
}

function deleteCheck(e) {
  const item = e.target;
  let i = item.parentNode.parentNode.rowIndex - 1;
  if (item.classList[1] === "fa-check") {
    item.classList = "fa-solid fa-x";
    myLibrary[i].read = false;
  } else if (item.classList[1] === "fa-x") {
    item.classList = "fa-solid fa-check";
    myLibrary[i].read = true;
  } else if (item.classList[1] === "fa-trash") {
    myLibrary.splice(i, 1);
  }
  showBooks();
}

function totalBooks() {
  const booksRead = document.querySelector(".total-read");
  const booksUnread = document.querySelector(".total-unread");
  const totalBooks = document.querySelector(".total");
  let readCounter = 0;
  let unreadCounter = 0;
  booksRead.textContent = 0;
  booksUnread.textContent = 0;

  for (let i = 0; i < myLibrary.length; i += 1) {
    if (myLibrary[i].read === true) {
      readCounter += 1;
      booksRead.textContent = readCounter;
    } else if (myLibrary[i].read === false) {
      unreadCounter += 1;
      booksUnread.textContent = unreadCounter;
    }
  }
  totalBooks.textContent = myLibrary.length;
}
