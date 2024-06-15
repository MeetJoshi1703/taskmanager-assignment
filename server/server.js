import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import taskRoutes from './routes/taskRoute.js';
import connectDB from './db/db.js'; 
import cors from 'cors';

const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/tasks',taskRoutes);

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.listen(port,()=>{
    console.log(`Server is runnning on port ${port}`);
});