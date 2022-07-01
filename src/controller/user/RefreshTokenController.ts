import { RefreshTokenServices } from "../../services/user/refreshTokenServices"
import { Request, Response } from 'express'



class RefreshTokenController {

  async handle(req: Request, res: Response) {
    const { refreshToken } = req.body

    const refreshTokenServices = new RefreshTokenServices()
    console.log(refreshToken)

    const newToken = await refreshTokenServices.execute(refreshToken)

    res.json(newToken)
  }
}


export { RefreshTokenController }