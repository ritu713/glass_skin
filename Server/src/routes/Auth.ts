import express, { Request, Response } from 'express'
//middleware to check if values entered by user are valid
import {validationResult, check} from 'express-validator'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/User/User'
import verifyToken from '../middleware'
import { PrismaClient } from '@prisma/client'
import transporter from '../mailSystem' 
//routes
const router = express.Router();
const prisma = new PrismaClient();
 
//registeration route
router.post('/register', [
    check("fName", "First name is required").isString(),
    check("lName", "Last name is required").isString(),
    check("emailID", "Email is required").isEmail(),
    check("password", "Password must be at least 8 characters long").isLength({min : 8})
], async (req : Request, res : Response) => {
    try {
        //returns empty if there are no validation errors found by "check" function
        const validationError = validationResult(req.body);
        if(!validationError.isEmpty()){
            console.log(validationError.array())
            return res.status(400).json({message : validationError.array()})
        }
        const { emailID, password, profile } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.findUnique({where : {emailID : emailID}})
        if(user){
            return res.status(400).json({message : "User already exists with this email"});
        }

        // Create user with profile
        const newUser = await prisma.user.create({
            data: {
                emailID : emailID,
                password: hashedPassword,
                createdAt: new Date(),
                profile: {
                    create: {
                        fName: profile.fName,
                        lName: profile.lName,
                        profilePicture: profile.profilePicture || "", // optional field
                        skinType: profile.skinType,
                        skinConcerns: profile.skinConcerns || [],
                    },
                },
            },
            include: { profile: true }, // Include profile in the response
        });

        //create JWT token which lasts for 1 week and a cookie in the result storing the token.
        const token = jwt.sign({userID : newUser.id}, process.env.JWT_SECRET_KEY as string, {expiresIn : "7d"})
        res.cookie("auth_token", token, {maxAge: 604800000, httpOnly : true, secure : process.env.NODE_ENV === 'production'});

        // send confirmation email to user
        const info = transporter.sendMail({
            to : emailID,
            subject : `Welcome to Glass Skin, ${profile.fName}`,
            text : `Hi ${profile.fName},\n\nThank you for registering with us. We are excited to have you on board!\n\nBest regards,\nThe Glass Skin Team`,
        })        

        return res.status(200).send({message : "User registered OK"})
    }
    catch(error : any){
        console.log(error.message)
        return res.status(500).json({message : "Something went wrong"})
    }
}) 

router.post('/login', [
    check("emailID", "Please enter your registered email").isEmail(),
    check("password", "Please enter your password").isString()
], async (req : Request, res : Response) => {
    console.log("here")
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({message : errors.array()})
    }

    try {
        const {emailID, password} = req.body;
        console.log("Finding user")
        const user = await prisma.user.findUnique({where : {emailID : emailID}})
        console.log("User found")

        if(!user){
            return res.status(400).json({message : "Invalid credentials"})
        }

        const match = await bcrypt.compare(password, user.password)
        if(!match){
            return res.status(400).json({message : "Invalid credentials"})
        }

        const token = jwt.sign({userID : user.id}, process.env.JWT_SECRET_KEY as string, {expiresIn : "7d"});
        res.cookie("auth_token", token, {maxAge: 604800000, httpOnly : true, secure : process.env.NODE_ENV === 'production'})
        console.log("User logged in successfully")
        return res.status(200).json({userID : user.id});
    }
    catch(error : any){
        console.log(error.message)
        return res.status(500).json({message : "Server error"})
    }
})

router.get('/validate-token', verifyToken, (req : Request, res : Response) => {
    return res.status(200).send({userID : req.userID});
})

router.get('/user', verifyToken, async (req : Request, res : Response) => {
    const userID = req.userID;
    try{        
        const user = await prisma.user.findUnique(
        {
            where : {id : userID}, 
            select: {
                id: true,
                emailID: true,
                createdAt: true,
                profile: true,
                routine: true,
                password: false, // Exclude password
            }
        }
        )
        if(!user){
            return res.status(400).json({message : "User not found"})
        }
        return res.status(200).json({user})
    }
    catch(err : any){
        return res.status(500).json({message : "Something went wrong"})
    }
})

router.post('/logout', (req : Request, res : Response) => {
    res.cookie("auth_token", "", {
        expires : new Date(0),
        httpOnly : true,
        path : "/",
    })

    return res.status(200).json({'message' : 'Logged out successfully'});
})

export default router

