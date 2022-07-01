import { Request, Response } from 'express'

import { ShowAllEmployeeServices } from "../../services/user/ShowAllEmployeeServices";



class ShowAllEmployeeController {

  async handle(req: Request, res: Response) {

    const showAllEmployeeController = new ShowAllEmployeeServices()

    const ShowAllEmployee = await showAllEmployeeController.execute()

    res.json(ShowAllEmployee)
  }
}

export { ShowAllEmployeeController }