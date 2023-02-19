function Book(title,author,pages,hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;

    /*
    this.info = function(){
        console.log(this);
        return (`${title} is a book by ${author}, ${pages} pages, ${hasRead ? 'has read' : 'not read yet'}`)
    }
    */
}

Book.prototype.info = function(){
    console.log(this);
    return (`${this.title} is a book by ${this.author}, ${this.pages} pages, ${this.hasRead ? 'has read' : 'not read yet'}`);
}




let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

function Magazine(publisher){
    this.publisher = publisher;
}

Magazine.prototype = Object.create(Book.prototype);