import { Router } from "express";
import propertiesRouter from './properties.js'
import registrationsRouter from './registrations.js'
import usersRouter from './users.js'
import auth from './auth.js'


const router = Router()

router.use('/properties', propertiesRouter)
router.use('/registrations', registrationsRouter)
router.use('/users', usersRouter)
router.use('/auth', auth)


export default router 