import { compare, hash } from 'bcryptjs'

const encrypt = async (password: string) => {
  const passwordHash = await hash(password, 8)

  return passwordHash
}

const verify = async (rawPass: string, encryptedPass: string) => {
  const isCorrect = await compare(rawPass, encryptedPass)

  return isCorrect
}

const decrypt = () => {

}

export { decrypt, encrypt, verify }
