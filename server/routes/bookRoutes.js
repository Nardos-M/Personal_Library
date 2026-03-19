import { Router } from "express";
import { createBook, findAllBooks } from "../models/book.js";

const router = Router();

router.get("/", async(req,res) =>{
    try{
        const allBooks = await findAllBooks();
        res.send(allBooks)
    }catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

router.post("/", async (req, res) => {
    const { title,author,lender,borrower,notes,borrowedDate,returnedDate } = req.body
    if (!title) {
        return res.status(400).send("Books required a title to the minimum")
    }
    try {
        const newBooks = await createBook(title,author,lender,borrower,notes,borrowedDate,returnedDate);
        res.send(newBooks);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

export default router;