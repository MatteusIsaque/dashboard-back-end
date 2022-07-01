import { UserSchema } from "../../schema/UserSchema";



class ShowProfileUserServices {

  async execute(email: string) {

    if (!email) {
      console.log("Erro ao encontrar o usuario")
    }

    const ShowUser = await UserSchema.findOne({ email: email })

    return ShowUser
  }
}

export { ShowProfileUserServices }