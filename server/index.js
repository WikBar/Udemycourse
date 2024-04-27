import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectToDatebase from './db.js';

//Routes
import productRoutes from './routes/productRoutes.js';


connectToDatebase();
const app = express();
app.use(express.json())
app.use(cors());
app.use('/api/products',productRoutes);

//localhost:5000/api/products




const port=5000;

app.get('/',(req,res)=>{
    res.send('Hello World, Nigga runin');
})


app.listen(port,()=>{   
    console.log(`Server is running on port ${port}`);
});