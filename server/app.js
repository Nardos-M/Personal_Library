import express from "express";
import loanRoutes from './routes/loanRoutes.js';


export function configure(app) {
    app.use(express.json());

    app.use('/api/loans', loanRoutes);
} 



