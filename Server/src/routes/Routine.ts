import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client';
const router = express.Router();
const prisma = new PrismaClient();

import verifyToken from '../middleware';

router.get('/', verifyToken, async (req : Request, res : Response) => {
    try{
        const userRoutines = await prisma.routine.findMany({
            where : {userID : req.userID}
        })
        return res.status(200).json(userRoutines)
    }
    catch(err : any){
        return res.status(500).json({message : "Error fetching routines"})
    }
})

router.post('/new', verifyToken, async (req : Request, res : Response) => {
    try{
        req.body.userID = req.userID;
        console.log(req.body)
        const routine = await prisma.routine.create({
            data : req.body
        })
        return res.status(200).json({message : "Routine added"})
    }
    catch(err : any){
        console.log(err)
        return res.status(500).json({message : "Server error occured"})
    }
})

router.delete('/delete/:ID', verifyToken, async (req : Request, res : Response) => {
    const routineID = req.params.ID;

    try{
        const routine = await prisma.routine.findUnique({
            where : {id : routineID}
        })

        if(!routine){
            return res.status(404).send({message : "Routine not found"})
        }

        const deleted = await prisma.routine.delete({
            where : {id : routineID}
        })

        if(deleted){
            return res.status(200).json({message : "Routine deleted successfully"})
        }
    }
    catch(err : any){
        return res.status(500).json({message : "Error deleting routine"})
    }
})

export default router;