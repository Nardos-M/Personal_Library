import { connectDb } from "./db.js";

const mongoose = await connectDb();

const loanSchema = new mongoose.Schema({
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
const loan = mongoose.model('loan',loanSchema,'loans');

//CRUD functions
export async function createLoan(title,author,lender,borrower,notes,borrowedDate,returnedDate){
    const newLoan = await loan.create({
        title,
        author,
        lender,
        borrower,
        notes,
        borrowedDate,
        returnedDate
    });
    return newLoan;
}

export async function findAllLoans() {
    return await loan.find();
}

export async function findLoanById(id){
    return await loan.findById(id);
}

export async function findLoanByLender(lender){
    return await loan.find({lender});
}

export async function findLoanByBorrower(borrower){
    return await loan.find({borrower});
}

export async function updateLoan({_id, title,author,lender,borrower,notes,borrowedDate,returnedDate}) {
    await loan.updateOne({_id}, {title,author,lender,borrower,notes,borrowedDate,returnedDate})
    return findLoanById(_id);
}

export async function deleteLoan(id){
    return await loan.deleteOne({_id:id})
}

export async function deleteAllLoans(){
    return await loan.deleteMany();
}