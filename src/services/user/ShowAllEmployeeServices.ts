import { UserSchema } from "../../schema/UserSchema";


class ShowAllEmployeeServices {

  async execute() {

    const findAllEmployee = UserSchema.find({ employee: true })

    return findAllEmployee
  }
}


export { ShowAllEmployeeServices }