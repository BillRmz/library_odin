
//selectors 
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const noPages = document.querySelector('#pages');
const state = document.querySelector('#status')
const btnAdd = document.querySelector('.btn')
const table = document.querySelector('#book-list')


//event listeners 
btnAdd.addEventListener('click', addBookToLibrary)
table.addEventListener('click', deleteCheck)


let myLibrary = [];

function Book(id, title, author, noPages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.noPages = noPages;
  this.read = read;
  
} 

Book.prototype.bookInfo = function(){
  return `${this.title} by ${this.author}, ${this.noPages}, is ${this.read}.`
}

function addBookToLibrary(e) {
  e.preventDefault();
  const book = new Book(count,bookTitle.value, bookAuthor.value, noPages.value, state.value)
  myLibrary.push(book)
  bookTitle.value = '';
  bookAuthor.value = ''; 
  noPages.value = '' ;
  state.value = '' ;
  showBooks(); 
  totalBooks()
}

let count = 0
function showBooks(){
const bookList = document.querySelector('#book-list') 
bookList.textContent = '';
  
 for(let i=0; i<myLibrary.length; i++){
  const bookRow = document.createElement('tr'); 
  bookList.appendChild(bookRow)

  //book title
   const bookTitle = document.createElement('td')
   bookTitle.textContent = myLibrary[i].title;
   bookRow.appendChild(bookTitle);
  

  //Author 
  const author = document.createElement('td');
  author.textContent = myLibrary[i].author;
  bookRow.appendChild(author);

  //Pages 
  const pages = document.createElement('td');
  pages.textContent = myLibrary[i].noPages
  bookRow.appendChild(pages)

  //status 
  const status = document.createElement('td');
  status.value = count
  if (myLibrary[i].read === 'not-read'){
   status.innerHTML = '<i class="fa-solid fa-x"> </i>'
   
  } 
  else if(myLibrary[i].read === 'read'){
  status.innerHTML = '<i class="fa-solid fa-check"> </i>'
  
  }
  bookRow.appendChild(status)

  //delete 
  const btnDel = document.createElement('td');
  btnDel.value = count 
  count = count+1
  btnDel.innerHTML = '<i class="fa-solid fa-trash"></i>'
  btnDel.classList.add('del')
  bookRow.appendChild(btnDel)  
  
}
totalBooks()
}



// function deleteCheck(e){
// const item = e.target;
// let id = e.value
// let i = item.parentElement.value
// if (item.classList[0] === 'del'){
//   const row = item.parentElement; 
//   myLibrary.splice(id,1)
//   row.remove();
// } else if(item.classList[1] === 'fa-check'){
//   item.classList = 'fa-solid fa-x'
  
//   myLibrary[i].read = 'not-read'
//   console.log(myLibrary[i])
// }else if (item.classList[1] === 'fa-x'){
//   item.classList = 'fa-solid fa-check'
 
//   myLibrary[i].read= 'read'
//   console.log(myLibrary[i]) 
// }
// console.log(myLibrary[i])
// }



function deleteCheck(e){
  const item = e.target;
  let i = item.parentNode.parentNode.rowIndex - 1
  if(item.classList[1]=== 'fa-check'){
    item.classList = 'fa-solid fa-x'
    myLibrary[i].read = 'not-read'
  } else if(item.classList[1] === 'fa-x'){
    item.classList = 'fa-solid fa-check'
    myLibrary[i].read = 'read'
  }else if(myLibrary[1] === 'fa-trash'){
    myLibrary.splice(i,1) 
  }
  showBooks()
  
}

function totalBooks(){
  
  const totalBooks = document.querySelector('.total')
  const totalRead = document.querySelector('.total-read') 
  const totalUnread = document.querySelector('.total-unread')
  let countRead = 0;
  let countUnread = 0;
  totalBooks.textContent  = myLibrary.length
  for(let i=0; i<=myLibrary.length; i++){
    if(myLibrary[i].read === "read"){
      countRead += 1 
      totalRead.textContent = countRead 
    } else if(myLibrary[i].read === "not-read"){
      let total = (myLibrary.length - countRead)
      countUnread += 1 
      totalUnread.textContent = countUnread 
    }
  }
    

}
