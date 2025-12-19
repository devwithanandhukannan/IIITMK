// Create a Node.js application to manage a book inventory system using a Map to store book details. Implement the following functionalities using the readline module for input:

// a. Add a book with a unique ID, title, author, and genre. If the book ID already exists, print an error message.

// b. Remove a book using its ID. If the book is not found, print an error message.

// c. Search for books by title, author, genre, or ID, and print the matching results.

// d. Update the title, author, and/or genre of a book using its ID. If the book is not found, print an error message.

// e. Print a summary report of all books in the inventory, displaying their ID, title, author, genre, and quantity (if applicable).

// f. Implement an option to exit the system gracefully after performing the required operations.



import { log } from 'console'
import { stdout, stdin } from 'process'
import rl from 'readline'
const input = rl.createInterface({
    input: stdin,
    output: stdout
})

const books = new Map()

const disp = () => {
    console.log('----- Book Management system -----');
    console.log('1. View All Books');
    console.log('2. Add New Book');
    console.log('3. Remove Book');
    console.log('4. Search');
    console.log('5. Update');
    console.log('6. Exit');
    
    


    input.question('Enter a Option: ', (opt) => {
        bookMgt(opt);
    })
}

let search_fun = (opt, searchValue) => {
    let found = false;

    switch (opt) {

        // Search by Unique ID
        case '1':
            if (books.has(searchValue)) {
                const book = books.get(searchValue);
                console.log(`ID: ${searchValue}
Title : ${book.title}
Author: ${book.author}
Genre : ${book.genre}`);
            } else {
                console.log('Invalid Unique ID');
            }
            break;

        // Search by Title
        case '2':
            for (let [id, book] of books) {
                if (book.title === searchValue) {
                    console.log(`ID: ${id}
Title : ${book.title}
Author: ${book.author}
Genre : ${book.genre}`);
                    found = true;
                }
            }
            if (!found) console.log('Not found');
            break;

        // Search by Author
        case '3':
            for (let [id, book] of books) {
                if (book.author === searchValue) {
                    console.log(`ID: ${id}
Title : ${book.title}
Author: ${book.author}
Genre : ${book.genre}`);
                    found = true;
                }
            }
            if (!found) console.log('Not found');
            break;

        // Search by Genre
        case '4':
            for (let [id, book] of books) {
                if (book.genre === searchValue) {
                    console.log(`ID: ${id}
Title : ${book.title}
Author: ${book.author}
Genre : ${book.genre}`);
                    found = true;
                }
            }
            if (!found) console.log('Not found');
            break;

        default:
            console.log('Invalid search option');
            break;
    }
};


let bookMgt = (opt) => {
    switch (opt) {
        case '1':
            if (books.size != 0) {
                for (let [id, val] of books) {
                    console.log(`[${id}]
                                    Title  : ${val.title}
                                    Author : ${val.author}
                                    Genre  : ${val.genre}
                                    `);
                }
            }else{
                console.log('No data');
                
            }
            disp()
            break;
        case '2':
            console.log("------------------------");
            console.log("------ Add Books -------");
            input.question("Unique ID: ", (unique_id) => {
                if (!books.has(unique_id)) {
                    input.question("Title: ", (title) => {
                        input.question("Author: ", (author) => {
                            input.question("Genre: ", (genre) => {
                                books.set(unique_id, { title, author, genre })
                                console.log('Added!!');
                                disp();
                            })
                        })
                    })
                } else {
                    console.log('book ID already exists');
                    disp()
                }
            })
            break;
        case '3':
            input.question("------------------------")
            input.question("----------- Remove Books")
            input.question("Enter unique id", (unique_id) => {
                if (!books.has(unique_id)) {
                    console.log('Invalid unique ID');
                    disp()
                } else {
                    books.delete(unique_id)
                    console.log('Deleted!!');
                    disp();
                }
            })
            break;
        case '4':
            console.log('---------------------------------');
            console.log('----------- Search  -------------');
            console.log('   1. Unique ID');
            console.log('   2. Title');
            console.log('   3. Author');
            console.log('   4. Genre');
            input.question("Enter a opt to search: ", (search_opt) => {
                input.question("Search value : ", (val) => {
                    search_fun(search_opt, val)
                    disp();
                })
            })
            break;
        case '5':
            console.log("-------------------------------")
            console.log("--------- Update --------------")
            input.question("Unique ID: ",(unique_id) => {
                if (books.has(unique_id)) {
                    input.question("Title: ", (title) => {
                        input.question("Author: ", (author) => {
                            input.question("Genre: ", (genre) => {
                                books.set(unique_id, { title, author, genre })
                                console.log('Added!!');
                                disp();
                            })
                        })
                    })
                } else {
                    console.log('book ID not exists');
                    disp();
                }
            })
            break;
        case '6':
            input.close();
            break;

        default:
            console.log('invalid choice');
            disp();
            break;


    }
}

disp()