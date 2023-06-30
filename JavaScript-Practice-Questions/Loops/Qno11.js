// Given an array of objects representing books, each with a title and author property, use the forEach loop to print the title and author of each book.

let books = [
    {title: "Kite Runner", author: "Khaled Hoseini", year: 2012},
    {title: "Twisted", author: "Ana Huang", year: 2019},
    {title: "Layla", author: "Colleen Hoover", year: 2022},
]

books.forEach(detail => {
    console.log(detail.title, detail.author);
})