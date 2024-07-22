var formElement = document.getElementById('search-form')
formElement.addEventListener('submit', function(event){
    event.preventDefault();
    console.log("submit");
    text = document.getElementById('search').value;
    search(text);
})

function search(text){
    var apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=name:';
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(event){
        if(event.target.readyState == XMLHttpRequest.DONE && event.target.status == 200){
            var response = JSON.parse(this.response);
            updateResult(response.items)
        }
    }

    httpRequest.open('GET', apiUrl + text);
    httpRequest.send();
}

function updateResult(items){
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = ''

    for(let i=0; i<items.length; i++){
        var bookElement = createBookHtml(items[i]);
        resultElement.appendChild(bookElement);
    }
}

function createBookHtml(bookInfo){
    var bookElement = document.createElement('div');
    bookElement.className = 'book-info';

    var bookImage = document.createElement('img');
    var imageSrc = null;
    if (bookInfo.volumeInfo.imageLinks?.Thumbnail) {
        imageSrc = bookInfo.volumeInfo.imageLinks.Thumbnail;
    } 
    else if (bookInfo.volumeInfo.imageLinks?.smallThumbnail) {
        imageSrc = bookInfo.volumeInfo.imageLinks.smallThumbnail;
    }

    bookImage.setAttribute('src', imageSrc);
    bookElement.appendChild(bookImage);

    var bookTitle = document.createElement('h5');
    bookTitle.innerText = bookInfo.volumeInfo.title;
    bookElement.appendChild(bookTitle);
    return bookElement;
}