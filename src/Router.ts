import { Router } from 'express'
import { db } from './database/Connect'

import { ensureAuthenticated } from './middlewares/EnsureAuthenticate'

import { CreateNewUserController } from './controller/user/CreateNewUserController'
import { AuthenticateUserController } from './controller/user/AuthenticateUserController'
import { RefreshTokenController } from './controller/user/RefreshTokenController'
import { ShowProfileUserController } from './controller/user/ShowProfileUserController'
import { ShowAllEmployeeController } from './controller/user/ShowAllEmployeeController'

db

const createnNewUserController = new CreateNewUserController()
const authenticateUserController = new AuthenticateUserController()
const refreshUserController = new RefreshTokenController()

const showProfileUserController = new ShowProfileUserController()
const showAllProfileEmployeeController = new ShowAllEmployeeController()


const router = Router()

router.post('/register', createnNewUserController.handle)
router.post('/refresh', refreshUserController.handle)
router.post('/authenticated', authenticateUserController.handle)

router.get('/profile/show/employee', ensureAuthenticated, showAllProfileEmployeeController.handle)
router.get('/profile/show/one', ensureAuthenticated, showProfileUserController.handle)





export { router }