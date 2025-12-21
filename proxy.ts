import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/jwt";

export default function proxy(req:NextRequest){
    const Token=req.cookies.get("AUTH")?.value
    if(!Token){
        return NextResponse.redirect(new URL("/login",req.url))
    }

    try{
        verifyToken(Token)
        return NextResponse.next()
    }
    catch{
        return NextResponse.redirect(new URL("/login", req.url));
    }

} 

export const config = {
  matcher: ["/explore/:path*"],
};
    
