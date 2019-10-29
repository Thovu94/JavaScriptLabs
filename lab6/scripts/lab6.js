////lab6 JavaScript file
book1 = {
    author: "William Shakespeare",
    title: "The Tempest",
    genre: "Historical Fiction"
};

book2 = {
    author: "Stephen King",
    title: "The Shining",
    genre: "Horror"
};

book3 = {
    author: "Anne Frank",
    title: "The Diary of Anne Frank",
    genre: "Non-Fiction"
};

var bookArray = new Array();

bookArray[0] = book1;
bookArray[1] = book2;
bookArray[2] = book3;


function addBooks() {
    for (i = 3; i < 6; i++) {


        var nameAu = prompt('Who is the author? ');
        var titBook = prompt('What is the title? ');
        var kindBook = prompt('What is the type of genres? ');
        book = {
            author: nameAu,
            title: titBook,
            genre: kindBook
        }
        bookArray[i] = book;
    }
}

function displayRecommendations() {
    var insertContent = "";
    for (i = 0; i < bookArray.length; i++) {
        insertContent += "<h1>Book " + (i + 1) + "</h1>" +
            "<ul><li>" + bookArray[i].title + ", Writen by: " + bookArray[i].author + "  Genre: " + bookArray[i].genre + "</li></ul>";
    }


    document.getElementById('bookList').innerHTML = insertContent;

};
addBooks();
displayRecommendations();
