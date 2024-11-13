import { Router } from "express";
import propertiesRouter from './properties.js'
import registrationsRouter from './registrations.js'
import usersRouter from './users.js'


const router = Router()

router.use('/properties', propertiesRouter)
router.use('/registrations', registrationsRouter)
router.use('/users', usersRouter)


export default router 