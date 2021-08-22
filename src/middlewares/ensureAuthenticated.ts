import { UsersRepository } from '@modules'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization

  if (!authHeader) throw new Error('Token missing!')

  const [, token] = authHeader.split(' ')

  try {
    const { sub: user_id } = verify(token, '7dc10a72810ccb5e01bd9bb6833b2cee')

    const usersRepository = new UsersRepository()

    const user = usersRepository.findById(user_id as string)

    if (!user) {
      throw new Error('User does not exists!')
    }

    next()
  } catch {
    throw new Error('Invalid token!')
  }
}
