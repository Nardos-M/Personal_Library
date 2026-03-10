import app from "./app.js";

const PORT = process.env.port || 3000;


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
});

// export function configure(app) {
//     app.use(express.json());

//     app.use('/api/auth', authRoutes);
//     app.use('/api/buyers', buyerRoutes);
//     app.use('/api/sellers', sellerRoutes);
//     app.use('/api/listings', listingRoutes);
// } 