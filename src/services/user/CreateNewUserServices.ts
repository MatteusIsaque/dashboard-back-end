import { hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { UserSchema } from '../../schema/UserSchema'

type CreateNewUserServicesType = {
  name: string,
  email: string,
  admin: boolean,
  password: string,
  employee: boolean,
  position: string[],
  tasks: string[]
}

class CreateNewUserServices {

  async execute({ name, email, admin = false, password, employee, position, tasks }: CreateNewUserServicesType) {

    if (!email || !password) {
      throw new Error("Falta dados para o registro")
    }

    const CheckEmail = UserSchema.findOne({ email: email })

    if (!CheckEmail) {
      throw new Error("Email já utilizado")
    }

    const passwordHash: any = await hash(password, 8)

    const refreshToken = sign({
      name: name,
      admin: admin,
      employee: employee,
      position: position
    }, `${process.env.JWT_PRIVATE_KEY_REFRESH}`, {
      expiresIn: 60 * 60 * 24 * 30, // 30 dias,
      subject: email
    }
    )

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);


    const CreateUser = new UserSchema({
      name,
      email,
      password: passwordHash,
      createdAt: today.toLocaleDateString(),
      employee,
      position,
      tasks,
      refreshToken: refreshToken
    })

    CreateUser.save()

    return { CreateUser }
  }
}

export { CreateNewUserServices }