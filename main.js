console.log('Hello World!');
const library = []
function Books(name, author, genre, noOfPages, readStatus, pubDate) {
    if (!new.target){
        throw Error('Use new when creating instances')
    }
    this.id = crypto.randomUUID()
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.noOfPages = noOfPages;
    this.readStatus = readStatus;
    this.pubDate = pubDate;
}

const addBook = function(name, author, genre, noOfPages, readStatus, pubDate){
    newBook = new Books(name, author, genre, noOfPages, readStatus, pubDate)
    library.push(newBook)
}
const main = document.querySelector('.main')
const displayBooks = function(library) {
    main.innerHTML = ''
    for (let book of library) {
        const div = document.createElement('div')
        div.classList.add('book')
        div.dataset.id = book.id
        const details = document.createElement('div')
        details.classList.add('details')
        const nameTag = document.createElement('h5')
        nameTag.classList.add('name')
        nameTag.textContent = book.name
        details.appendChild(nameTag)
        const authorTag = document.createElement('p')
        authorTag.classList.add('author')
        authorTag.textContent = `by ${book.author}`
        details.appendChild(authorTag)
        const pubTag = document.createElement('p')
        pubTag.classList.add('more-info')
        pubTag.textContent = `Pub: ${book.pubDate}`
        details.appendChild(pubTag)
        const genreTag = document.createElement('p')
        genreTag.classList.add('more-info')
        genreTag.textContent = book.genre
        details.appendChild(genreTag)
        const pageTag = document.createElement('p')
        pageTag.classList.add('more-info')
        pageTag.textContent = `${book.noOfPages} pages`
        details.appendChild(pageTag)
        const readButton = document.createElement('button')
        readButton.classList.add('read')
        readButton.textContent = (book.readStatus)? 'read':'not read'
        readButton.style.cssText = (book.readStatus)? 'border-color: #14B747; color: #14B747' : 'border-color: black; color: black '
        readButton.dataset.id = book.id
        readButton.addEventListener('click', (event) => {
            library.map((book) => {
                if (book.id === event.target.dataset.id){
                    toggleRead(book, event.target)
                }
            })
        })
        details.appendChild(readButton)
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete')
        deleteButton.textContent = 'Delete'
        deleteButton.dataset.id = book.id
        deleteButton.addEventListener('click', (event) => {
            for (let book of library) {
                if (book.id === event.target.dataset.id) {
                    index = library.indexOf(book);
                    library.splice(index, 1)
                    const parent = document.querySelector(`div[data-id='${book.id}']`)
                    parent.remove()
                }
            }
        })
        details.append(deleteButton)
        div.appendChild(details)
        main.appendChild(div)
    }
}

const toggleRead = function(book, element) {
    if (book.readStatus){
        book.readStatus = false;
        element.textContent = 'not read';
        element.style.cssText = 'border-color: black; color: black'
    }
    else{
        book.readStatus = true;
        element.textContent = 'read';
        element.style.cssText = 'border-color: #14B747; color: #14B747'
    }
}

const name = document.querySelector('#name')
const author = document.querySelector('#author')
const genre = document.querySelector('#genre')
const pageNumber = document.querySelector('#pages')
const pubDate = document.querySelector('#pub')
const add = document.querySelector('.add-book')
const dialog = document.querySelector('dialog')
const submit = document.querySelector('.submit')
const read = document.querySelector('#readStatus')

addBook('Jay Trek', 'Jay', 'Sci-Fi', 600, true, '2025-04-23')
addBook('Jay the first', 'Jay', 'Fantasy',890, false, '2023-07-12')
addBook('Jay and the Beast', 'Jay', 'Fantasy', 560, true, '2020-09-30')
addBook('Jarry Potter', 'Jay', 'Fantasy', 10345, true, '2019-06-07')
addBook('Jaybob squarejay', 'Jay', 'comedy', 300, false, '2023-07-08')
addBook('Game of Jay', 'Jay', 'action', 670, false, '2025-06-02')
addBook('Iron Jay', 'Jay', 'action', 560, false, '2021-03-12')
addBook('Hunger Jay', 'Jay', 'action', 780, true, '1997-07-31')
addBook('Attack on Jay', 'Eren Jayger', 'thriller', 800, false,'0001-01-01')
addBook('Jay of the Rings', 'Jay', 'Fantasy', 400, false, '2023-04-06')
addBook('Jaydarella', 'Jay', 'Fantasy', 440, false, '2023-07-06')
addBook('Jayrassic World', 'Jay', 'Biography', 5050, false, '2000-06-09')

add.addEventListener('click', () => {
    name.value = ''
    author.value = ''
    genre.value = ''
    pageNumber.value = ''
    pubDate.value = ''
    dialog.showModal()
})
submit.addEventListener('click', () => {
    addBook(name.value, author.value, genre.value, pageNumber.value, read.checked, pubDate.value)
    console.log(read.checked)
    displayBooks(library)
})
displayBooks(library)

const readBtns = document.querySelectorAll('.read')
const deleteBtns = document.querySelectorAll('.delete')


deleteBtns.forEach((button) => {
    
})