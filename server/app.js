import express from "express";
import bookRoutes from './routes/bookRoutes.js';


export function configure(app) {
    app.use(express.json());

    app.use('/api/books', bookRoutes);
} 



