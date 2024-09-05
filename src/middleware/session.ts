import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";

export interface RequestExt extends Request {
  user?: string | JwtPayload
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || null
    const jwt = jwtByUser?.split(' ').pop()

    const isUser = verifyToken(`${jwt}`)

    if (!isUser) {
      res.status(401)
      res.send('JWT_NOT_VALID')
    } else {
      req.user = isUser
      next()
    }

  } catch (error) {
    console.log(error);
    res.status(400)
    res.send('SESSION_NOT_VALID')
  }
}

export { checkJwt };
