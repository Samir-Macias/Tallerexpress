import { Router } from "express";
import {create } from "../controllers/registrations/create.js"
import {deleteAllRegistrations, deleteRegistration} from "../controllers/registrations/deleate.js"
import {allRegistration, idRegistration} from "../controllers/registrations/read.js"
import {updateManyRegistrations, updateRegistration} from "../controllers/registrations/update.js"
import validator from "../middlewares/validator.js";
import updateRegistrationSchema from "../schemas/registration/update.js";
import createRegistrationSchema from "../schemas/registration/create.js";


const router = Router()

router.post('/create',validator(createRegistrationSchema), create)
router.delete('/delete', deleteRegistration)
router.delete('/deleteall', deleteAllRegistrations)
router.get('/all', allRegistration)
router.get('/id/:id', idRegistration)
router.put('update',validator(updateRegistrationSchema), updateRegistration)
router.put('updatemany', updateManyRegistrations)

export default router