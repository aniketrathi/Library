let library = [];
function Book(title,author,pages,read) {
	this.no=library.length+1;
	this.title=title;
	this.author=author;
	this.pages=pages;
	this.read=read;
};

var book1=new Book('A','B','100',true);
library.push(book1);
var book2=new Book('C','D','200',false);
library.push(book2);

function displaybook({title, author, pages, read}){
	var message = "<tr><td>"+ title + "</td><td>" + author + "</td><td>" + pages + "</td><td>" + read + "</td><td><span class='btn btn-primary change' onclick='changeRead(event)'>Change</span></td><td><span class='btn btn-danger delete' onclick='deleteRow(event)'>Delete</span></td></tr>" ;
	document.getElementById('booklist').innerHTML+=message;

}

function fun(){
	var title=document.getElementById('title').value;
	var author=document.getElementById('author').value;
	var pages=document.getElementById('pages').value;
	var read=document.getElementById('yes').checked;
	var book3= new Book(title,author,pages,read);
	library.push(book3);
	displaybook(book3);
}

document.querySelector('#add_book_button').addEventListener("click", fun);

for(var i=0; i<library.length ; i++){
	displaybook(library[i]);
}

function changeRead(event){
	//display
	var node = event.target;
	var row = node.parentElement.parentElement;	
	var msg = row.childNodes[3].innerHTML;
	if(msg==="true")
		row.childNodes[3].innerHTML="false";
	else
		row.childNodes[3].innerHTML="true";
	//library
	var title = row.childNodes[0].textContent;
	var author = row.childNodes[1].textContent;
	for(var i=0;i<library.length;i++){
		if(library[i].title===title && library[i].author===author)
			library[i].read=!library[i].read;
	}
}

function deleteRow(event){
	var node = event.target;
	var row = node.parentElement.parentElement;
	var title = row.childNodes[0].textContent;
	var author = row.childNodes[1].textContent;
	row.remove();
	for(var i=0;i<library.length;i++){
		if(library[i].title===title && library[i].author===author)
			library.slice(i);
	}

}


