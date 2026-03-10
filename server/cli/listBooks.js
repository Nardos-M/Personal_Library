import { findAllBooks } from "../models/book.js";
import { disconnectDb } from "../models/db.js";

const books = await findAllBooks()
books.forEach(book => {
    console.log(book);
});

await disconnectDb();