import jwt from "jsonwebtoken" 
import bcrypt from "bcrypt";

const serect = process.env.SERECT_KEY as string

export function signtoken(payload:any){
    return jwt.sign(payload, serect)
}

export function verifyToken(token: string) {
  return jwt.verify(token, serect);
}


export function hashPassword(password: string){
  bcrypt.hash(password, 10)
}


export function comparePassword(password: string,hash: string){
    bcrypt.compare(password, hash)
};

