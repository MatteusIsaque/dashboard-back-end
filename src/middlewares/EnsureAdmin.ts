import { NextFunction, Request, Response } from "express";
// import { UserSchema } from './../schema/userSchema'

async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
  const { user_id } = req

  // const { admin }: any = await UserSchema.findById(user_id)

  // if (!admin) {
  //   return res.status(401).json({
  //     error: "Não encontrado"
  //   })
  // }

  // if (admin) {
  //   return next();
  // }

  return res.status(401).json({
    error: "Não autorizado"
  })
}


export { ensureAdmin }