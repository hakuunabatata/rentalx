import { AppError } from '@errors'
import { UsersRepository } from '@modules'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization

  if (!authHeader) throw new AppError('Token missing!', 401)

  const [, token] = authHeader.split(' ')

  try {
    const { sub: user_id } = verify(token, '7dc10a72810ccb5e01bd9bb6833b2cee')

    const usersRepository = new UsersRepository()

    const user = usersRepository.findById(user_id as string)

    if (!user) {
      throw new AppError('User does not exists!', 401)
    }

    next()
  } catch {
    throw new AppError('Invalid token!', 401)
  }
}
