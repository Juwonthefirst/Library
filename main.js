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
    this.pubDate = pubDate;
    this.readStatus = readStatus;
}

const addBook = function(name, author, genre, noOfPages, readStatus, pubDate){
    newBook = new Books(name, author, genre, noOfPages, readStatus, pubDate)
    library.push(newBook)
}
addBook('Jay Trek', 'Jay', 'Sci-Fi', 600, true, '2025-04-23')
addBook('Jay the first', 'Jay', 'Fantasy',890, false, '2023-07-12')
addBook('Jay and the Beast', 'Jay', 'Fantasy', 560, true, '2020-09-30')
addBook('Jarry Potter', 'Jay', 'Fantasy', 10345, true, '2019-06-07')
addBook('Jaybob squarejay', 'Jay', 'comedy', 300, false, '2023-07-08')
addBook('Game of Jay', 'Jay', 'action', 670, false, '2025-06-02')
addBook('Iron Jay', 'Jay', 'action', 560, false, '2021-03-12')
addBook('Hunger Jay', 'Jay', 'action', 780, true, '1997-07-31')
addBook('Attack on Jay', 'Eren Jayger', 'thriller', 800, false,'0001-01-01')

const main = document.querySelector('.main')
const displayBooks = function(library) {
    main.innerHTML = ''
    for (let book of library) {
        const div = document.createElement('div')
        div.classList.add('book')
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
        pubTag.textContent = book.pubDate
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
        readButton.textContent = 'read'
        details.appendChild(readButton)
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete')
        deleteButton.textContent = 'Delete'
        details.append(deleteButton)
        div.appendChild(details)
        main.appendChild(div)
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
add.addEventListener('click', () => {
    name.value = ''
    author.value = ''
    genre.value = ''
    pageNumber.value = ''
    pubDate.value = ''
    dialog.showModal()
})
submit.addEventListener('click', () => {
    addBook(name.value, author.value, genre.value, pageNumber.value, 'not read', pubDate.value)
    displayBooks(library)
})
displayBooks(library)
const readBtn = document.querySelectorAll('.read')
readBtn.forEach((button) => {
    button.addEventListener('click', (event) => {
        for (let book of library) {
            if (event.target === book.id && book.read){
                event.target.style.backgroundColor = 'green'
            }
            else if (event.target === book.id && !book.read){
                event.target.style.backgroundColor = 'white'
            }
        }
    })
})