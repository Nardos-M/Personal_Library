import express from 'express';
import { configure } from './app.js';

const app = express();
const PORT = process.env.PORT || 3000;

configure(app)

const server = app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
})




// import app from "./app.js";

// const PORT = process.env.port || 3000;


// app.listen(PORT, ()=>{
//     console.log(`server running on port ${PORT}`);
// });

// export function configure(app) {
//     app.use(express.json());

//     app.use('/api/auth', authRoutes);
//     app.use('/api/buyers', buyerRoutes);
//     app.use('/api/sellers', sellerRoutes);
//     app.use('/api/listings', listingRoutes);
// } 