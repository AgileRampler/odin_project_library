const myLibrary = [];

function Book(author,title,pages,read) {
  this.author = author
  this.title = title
  this.pages= pages
  this.read = read


  
}

function addBookToLibrary() {
 
let  author = document.querySelector("#author").value;
let  title   = document.querySelector("#book-title").value;
let  pages  = document.querySelector("#book-pages").value;
let read = document.querySelector("#read").checked
let notRead = document.querySelector("#notRead").checked
console.log(notRead);

let newBook = new Book(author,title,pages,read)

myLibrary.push(newBook)
console.log(myLibrary);
render()
}



function render(){
 
    let libraryBook = document.querySelector("#cards")
    libraryBook.innerHTML=""
    for(i=0; i<myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div")
        bookEl.innerHTML= `
        <div id="card-header" class="border border-primary ">
        <div class="text-content">
            <p class="authorname fw-bold">Author Name:${book.author}</p>
            <p class="booktitle">Book Title:${book.title}</p>
            <p class="pagesread">Pages read:${book.pages}
             <p class="pagesread">Status:${book.read ?"Read":"Not Read"}<p/>
             
        </div>
        <button id="removeButton"  onclick="removeButton(${i})" class="btn btn-danger ms-2  ">Remove</button>
        <div/>`
        libraryBook.appendChild(bookEl)
       
        
    }
}



function removeButton(index){
myLibrary.splice(index,1)


render()
    

}

function removeContent(){
 
  
    let  author = document.querySelector("#author").value = ""
    let  title   = document.querySelector("#book-title").value =""
    let  pages  = document.querySelector("#book-pages").value = ""
    let read = document.querySelector("#read").checked=""
    let notRead = document.querySelector("#notRead").checked=""
    
}





// Dialog Box
const dialog = document.querySelector("dialog")
const showDialog = document.getElementById("showDialog")
const submitButtton= document.getElementById("submitButton")

// Opening dialog box

showDialog.addEventListener("click",()=>{
    console.log("clicked");
    dialog.showModal();
    
});

// closing the dialog box

submitButtton.addEventListener("click",()=>{
   
    addBookToLibrary()
    removeContent()
  
        dialog.close();
    
      
     
})

const closedialog = document.querySelector(".icon")

closedialog.addEventListener("click",()=>{
    removeContent()
    dialog.close();
})