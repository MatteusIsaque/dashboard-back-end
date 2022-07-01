import { sign } from 'jsonwebtoken'
import { UserSchema } from '../../schema/UserSchema'

type AuthenticateUserServicesType = {
  email: string,
  password: string,
}

class AuthenticateUserServices {

  async execute({ email, password }: AuthenticateUserServicesType) {

    if (!email || !password) {
      throw new Error("Falta dados para o login")
    }

    const CheckEmail = await UserSchema.findOne({ email: email })

    if (!CheckEmail) {
      throw new Error("Email já utilizado")
    }

    const token = sign({
      name: CheckEmail.email,
      admin: CheckEmail.admin,
      employee: CheckEmail.employee,
      position: CheckEmail.position
    }, `${process.env.JWT_PRIVATE_KEY}`, {
      expiresIn: 60 * 60 * 24 * 30, // 30 dias,
      subject: email
    }
    )

    const data = {
      "name": CheckEmail.name,
      "email": CheckEmail.email,
      "admin": CheckEmail.admin,
      "employee": CheckEmail.employee,
      "position": CheckEmail.position,
      "tasks": CheckEmail.tasks,
      "refreshToken": CheckEmail.refreshToken,
      "token": token
    }

    return { data }
  }
}

export { AuthenticateUserServices }