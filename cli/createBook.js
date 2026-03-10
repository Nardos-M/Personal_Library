import { createBook } from "../models/book.js";
import { disconnectDb } from "../models/db.js";

// [ 'node', 'createBook.js', 'Dogmatic theology', 'Alexander Schemamann', 'nardi','my prayer','esti kanebebkew enayalen','2026-01-12','2026-01-25']
// node createBook.js Dogmatic theology Alexander Schemamann nardi my prayer esti_enayalen 2026-01-12 2026-01-25

if (process.argv < 7) {
    console.log("Usage: node createBook <title> <author> <lender> <borrower> <notes> <borrowedDate> <returnedDate>")
    process.exit(1)
}
const title = process.argv[2]
const author = process.argv[3]
const lender = process.argv[4]
const borrower = process.argv[5]
const notes = process.argv[6]
const borrowedDate = process.argv[7]
const returnedDate = process.argv[8]

await createBook(title, author, lender,borrower,notes,borrowedDate,returnedDate)
console.log(`the book ${title} written by author ${author} and took by ${borrower} from ${lender} on ${borrowedDate} and promised to return it on ${returnedDate}`)

await disconnectDb()