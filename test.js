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




const book = new Book('test1', 'mundo', 520, 'read')
const bookt = new Book('test2', 'hola', 320, 'No read')

myLibrary.push(book, bookt)

for(let i=0; i<myLibrary.length; i++){
    console.log(myLibrary[i].title,myLibrary[i].author,myLibrary[i].read)
}