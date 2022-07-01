import { NextFunction, request, Request, Response } from 'express';
import { verify } from 'jsonwebtoken'

type PayLoad = {
  sub: string
}


export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

  const authToken = req.headers.authorization

  if (!authToken) {
    return res.status(401).end()
  }

  const [, token] = authToken.split(" ")

  try {
    const { sub } = verify(token, `${process.env.JWT_PRIVATE_KEY}`) as PayLoad

    request.user_id = sub;

    return next();
  } catch (error) {
    res.status(401).send("Token.Expired")
  }
}