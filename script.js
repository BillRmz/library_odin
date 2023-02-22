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

function addBookToLibrary(title, author, noPages, read) {
  const book = new Book(title, author, noPages, read)
  myLibrary.push(book)
}


addBookToLibrary('Harry Potter Deathly Hallows', 'J.K Rowlling',607, 'Read')
addBookToLibrary('Isla de los Hombres Solos', 'Jose Leon Sanchez',250, 'Read')

console.log(myLibrary)

for(i in myLibrary){
    console.log(myLibrary[i].title,myLibrary[i].author )
  
    
}