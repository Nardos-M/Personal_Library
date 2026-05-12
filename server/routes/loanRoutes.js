import { Router } from "express";
import { createLoan, findAllLoans } from "../models/loan.js";

const router = Router();

router.get("/", async(req,res) =>{
    try{
        const allLoans = await findAllLoans();
        res.send(allLoans)
    }catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

router.post("/", async (req, res) => {
    const { title,author,lender,borrower,notes,borrowedDate,returnedDate } = req.body
    if (!title) {
        return res.status(400).send("loans required a title to the minimum")
    }
    try {
        const newloans = await createLoan(title,author,lender,borrower,notes,borrowedDate,returnedDate);
        res.send(newloans);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

export default router;