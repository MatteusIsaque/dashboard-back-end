import { Request, Response } from 'express'
import { ShowProfileUserServices } from '../../services/user/ShowProfileUserServices'

class ShowProfileUserController {

  async handle(req: Request, res: Response) {
    const { user_id } = req

    const showProfileUserServices = new ShowProfileUserServices()

    const showProfileUser = await showProfileUserServices.execute(user_id)

    res.json(showProfileUser)
  }
}

export { ShowProfileUserController }