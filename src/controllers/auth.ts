import { Request, Response } from "express"
import { loginUser, registerNewUser } from "../services/auth"

const registerController = async (req: Request, res: Response) => {
  const body = req.body
  const resp = await registerNewUser(body)

  res.send(resp)
}

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const resp = await loginUser({ email, password })

  res.send(resp)
}

export {
  loginController,
  registerController
}
