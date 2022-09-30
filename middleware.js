import { NextResponse } from "next/server";
export default function middleware(req){
    let verify = req.cookies.get("authToken");
    let url = req.url
    
    if(!verify && url==(`${req?.nextUrl?.protocol}//${req?.nextUrl?.host}/Student/Home` )){
        return NextResponse.redirect(`${req?.nextUrl?.protocol}//${req?.nextUrl?.host}/Auth/Login`);
    }

    if (verify && url === `${req?.nextUrl?.protocol}//${req?.nextUrl?.host}/Auth/Login`) {
      return NextResponse.redirect(`${req?.nextUrl?.protocol}//${req?.nextUrl?.host}/Student/Home`);
    }
}

