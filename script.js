
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const noPages = document.querySelector('#pages');
const state = document.querySelector('#status')

const btnAdd = document.querySelector('.btn')


btnAdd.addEventListener('click', addBookToLibrary)


let myLibrary = [];

function Book(title, author, noPages, read) {
  this.title = title;
  this.author = author;
  this.noPages = noPages;
  this.read = read

} 

Book.prototype.bookInfo = function(){
    return `${this.title} by ${this.author}, ${this.noPages}, is ${this.read}.`
}

function addBookToLibrary(e) {
  e.preventDefault();
  const book = new Book(bookTitle.value, bookAuthor.value, noPages.value, state.value)
  myLibrary.push(book)
  bookTitle.value = '';
  bookAuthor.value = ''; 
  noPages.value = '' ;
  state.value = '' ;
}


function showBooks(){
  const bookList = document.querySelector('#book-list')

  for(let i=0; i<myLibrary.length; i++){
   const bookRow = document.createElement('tr');

   //book title
   const bookTitle = document.createElement('td')
   bookTitle.textContent = myLibrary[i].title;
    bookRow.appendChild(bookTitle);

   
   
   
    console.log(myLibrary[i].title,myLibrary[i].author,myLibrary[i].read)
}

}





