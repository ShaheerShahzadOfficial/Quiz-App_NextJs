import connect from "../../Utils/mongoDbConnection.js";

import User from "../../models/UserSchema.js";
import { varifyHash } from "bcrypt-inzi";
import JsonWebToken from "jsonwebtoken";
import cookie from "cookie"
connect()


export default async function logOut(req, res) {
         res.setHeader("Set-Cookie", cookie.serialize("authToken", '', {
            httpOnly: true,
            maxAge: new Date(
               Date.now() + 2 * 24 * 60 * 60 * 1000),
            sameSite: "strict",
            path:"/"
         }))

         res.status(200).json({msg: "You Are Logged Out Successfully"})
}