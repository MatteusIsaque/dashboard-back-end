import { sign, verify } from "jsonwebtoken"
import { UserSchema } from "../../schema/UserSchema"

type UserDataType = {
  name: string,
  sub: string,
  admin: boolean,
  employee: boolean,
  position: [],
}

class RefreshTokenServices {

  async execute(refreshToken: string) {


    if (!refreshToken) {
      throw new Error("token.inexistente")
    }

    const data = verify(refreshToken, `${process.env.JWT_PRIVATE_KEY_REFRESH}`) as UserDataType

    const token = sign({
      name: data.name,
      admin: data.admin,
      employee: data.employee,
      position: data.position
    }, `${process.env.JWT_PRIVATE_KEY}`, {
      expiresIn: 60 * 60 * 24 * 30, // 30 dias,
      subject: data.sub
    }
    )

    const refreshtoken = sign({
      name: data.name,
      admin: data.admin,
      employee: data.employee,
      position: data.position
    }, `${process.env.JWT_PRIVATE_KEY}`, {
      expiresIn: 60 * 60 * 24 * 30, // 30 dias,
      subject: data.sub
    }
    )

    const newRefreshToken = new UserSchema({
      refreshToken: refreshtoken
    })

    newRefreshToken.save()

    return {
      token,
      refreshtoken
    }
  }
}

export { RefreshTokenServices }