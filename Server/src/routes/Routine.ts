import express, { Request, Response } from 'express'
const router = express.Router();
import verifyToken from '../middleware';
import Routine from '../models/User/Routine';

router.get('/', verifyToken, async (req : Request, res : Response) => {
    try{
        const userRoutines = await Routine.find({userID : req.userID})
        return res.status(200).json(userRoutines)
    }
    catch(err : any){
        return res.status(500).json({message : "Error fetching routines"})
    }
})

router.post('/new', verifyToken, async (req : Request, res : Response) => {
    try{
        req.body.userID = req.userID;
        const routine = await Routine.create(req.body);
        return res.status(200).json({message : "Routine added"})
    }
    catch(err : any){
        return res.status(500).json({message : "Server error occured"})
    }
})

router.delete('/delete/:ID', verifyToken, async (req : Request, res : Response) => {
    const routineID = req.params.ID;

    try{
        console.log(routineID);
        const routine = await Routine.findById(routineID)

        if(!routine){
            return res.status(404).send({message : "Routine not found"})
        }

        const deleted = await Routine.deleteOne({_id : routineID})

        if(deleted){
            return res.status(200).json({message : "Routine deleted successfully"})
        }
    }
    catch(err : any){
        return res.status(500).json({message : "Error deleting routine"})
    }
})

export default router;