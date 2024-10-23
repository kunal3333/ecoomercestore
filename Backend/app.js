import express from 'express'

import { config } from 'dotenv'
import connectDB from './Database/db.js'

import UserRouter from './Routes/authroute.js'
import bodyParser from 'body-parser'




const app= express()

config()

connectDB()

app.use(express.json());
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error('Bad JSON:', err.body);
        return res.status(400).send({ error: 'Invalid JSON' });
    }
    next();
}); 


app.use(UserRouter) 

app.listen(5000,()=>{
    console.log("server is running on port no 5000")
}) 






