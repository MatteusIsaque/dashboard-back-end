import { Request, Response } from 'express'
import { AuthenticateUserServices } from '../../services/user/AuthenticateUserServices'


class AuthenticateUserController {

  async handle(req: Request, res: Response) {
    const { email, password } = req.body

    const authenticateUserServices = new AuthenticateUserServices()

    const authenticate = await authenticateUserServices.execute({ email, password })

    res.json(authenticate)
  }
}


export { AuthenticateUserController }