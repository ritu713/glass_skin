import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

//middleware
declare global {
    namespace Express {
        interface Request {
            userID : string;
        }
    }
}

const verifyToken = async (req : Request, res : Response, next : NextFunction) => {
    const token = await req.cookies["auth_token"]
    if(!token){
        console.log("Cookie value " , req.cookies)
        return res.status(401).json({message : "Unauthorized"})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string)
        req.userID = (decoded as JwtPayload).userID;
        next()
    }
    catch(err : any){
        return res.status(500).json({message : "Unauthorised"})
    }
}

export default verifyToken