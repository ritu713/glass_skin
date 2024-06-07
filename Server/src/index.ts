import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import authRoutes from './routes/Auth'
import routineRoutes from './routes/Routine'
import bodyParser from 'body-parser'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'

dotenv.config();

const app = express()

app.use(bodyParser.json());
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials: true
}));
app.use('/api/auth', authRoutes)
app.use('/api/routine', routineRoutes)

mongoose
.connect(process.env.MONGO_URL as string)
.then(() => {
    console.log("App connected to DB successfully");
    app.listen(process.env.PORT, () => {
        console.log("Server up, listening to port " + process.env.PORT)
    })
})
.catch((err : Error) => {
    console.log("Error connecting to DB", err)
});
