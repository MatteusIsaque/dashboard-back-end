import { Request, response, Response } from "express";
import { CreateNewUserServices } from "../../services/user/CreateNewUserServices";


class CreateNewUserController {

  async handle(req: Request, res: Response) {
    const { name, email, admin, password, employee, position, tasks } = req.body

    const createNewUserServices = new CreateNewUserServices()

    const newUser = await createNewUserServices.execute({ name, email, admin, password, employee, position, tasks })

    res.status(200).json((newUser))
  }
}

export { CreateNewUserController }