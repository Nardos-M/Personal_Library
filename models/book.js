import { connectDb } from "./db.js";

const mongoose = await connectDb();

const bookSchema = new mongoose.Schema({
    title:String,
    author:String,
    lender:{
        type:String,
        required:true,
    },
    borrower:{
        type:String,
        required:true
    },
    notes:{
        type:String
    },
    borrowedDate:Date,
    returnedDate:Date,
});

//Models
const Book = mongoose.model('book',bookSchema,'books');

//CRUD functions
export async function createBook(title,author,lender,borrower,notes,borrowedDate,returnedDate){
    const newBook = await Book.create({
        title,
        author,
        lender,
        borrower,
        notes,
        borrowedDate,
        returnedDate
    });
    return newBook;
}

export async function findAllBooks() {
    return await Book.find();
}

export async function findBookById(id){
    return await Book.findById(id);
}

export async function findBookByLender(lender){
    return await Book.find({lender});
}

export async function findBookByBorrower(borrower){
    return await Book.find({borrower});
}

export async function updateBook({_id, title,author,lender,borrower,notes,borrowedDate,returnedDate}) {
    await Book.updateOne({_id}, {title,author,lender,borrower,notes,borrowedDate,returnedDate})
    return findBookById(_id);
}

export async function deleteBook(id){
    return await Book.deleteOne({_id:id})
}

export async function deleteAllBooks(){
    return await Book.deleteMany();
}