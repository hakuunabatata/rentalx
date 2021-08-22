import { Router } from 'express'
import multer from 'multer'

import { CreateUserController, UpdateUserAvatarController } from '@modules'

import { upload as uploadConfig } from '@config'
import { ensureAuthenticated } from '@middlewares'

const usersRoutes = Router()

const uploadAvatar = multer(uploadConfig('./tmp/avatar'))

const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()

usersRoutes.post('/', createUserController.handle)

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle
)

export { usersRoutes }
