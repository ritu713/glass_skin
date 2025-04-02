import express from 'express'
import cors from 'cors'
import authRoutes from './routes/Auth'
import routineRoutes from './routes/Routine'
import analyseRoutes from './routes/Analyser'
import bodyParser from 'body-parser'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'

import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'


dotenv.config();

const app = express()

app.use(bodyParser.json());
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin : [process.env.FRONTEND_URL as string, process.env.FLASK_SERVER as string],
    credentials: true
}));
app.use('/api/auth', authRoutes)
app.use('/api/routine', routineRoutes)
app.use('/api/analyser', analyseRoutes)

// connect to postgresql server on neondb
const connectionString = `${process.env.POSTGRES_URL}`
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function testConnection() {
    try {
      await prisma.$connect();
      app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      }).on('error', (err) => {
        console.error("Error starting server:", err);
      });
      console.log("Connected to the database successfully!");
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
  }
  
testConnection();