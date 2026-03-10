import express from "express";

const app = express();   
const port = process.env.port || 3000;


app.listen(port, ()=>{
    console.log(`surver running on port ${port}`);
});

// export function configure(app) {
//     app.use(express.json());

//     app.use('/api/auth', authRoutes);
//     app.use('/api/buyers', buyerRoutes);
//     app.use('/api/sellers', sellerRoutes);
//     app.use('/api/listings', listingRoutes);
// } 