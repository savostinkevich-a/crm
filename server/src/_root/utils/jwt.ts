import dotenv from 'dotenv';
import jwt from "jsonwebtoken"

dotenv.config();

export const JWTSignAccess = (data: any): string => {
    return jwt.sign({data}, "a", {expiresIn: '30d'})
}

export const JWTVerify = (auth: string) => {
    if (auth) {
        let token = auth.split(" ")[0]
        try {
            let verify: any = jwt.verify(token, "a")
            return verify.data
        } catch (e) {return null}
    }
}
