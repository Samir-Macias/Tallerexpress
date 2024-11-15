import { Router } from "express";
import {create } from "../controllers/registrations/create.js"
import {deleteAllRegistrations, deleteRegistration} from "../controllers/registrations/deleate.js"
import {allRegistration, idRegistration} from "../controllers/registrations/read.js"
import {updateManyRegistrations, updateRegistration} from "../controllers/registrations/update.js"
import validator from "../middlewares/validator.js";
import updateRegistrationSchema from "../schemas/registration/update.js";
import createRegistrationSchema from "../schemas/registration/create.js";


const router = Router()

router.post('/create',passport.authenticate('jwt',{session:false}),validator(createRegistrationSchema), create)
router.delete('/delete',passport.authenticate('jwt',{session:false}), deleteRegistration)
router.delete('/deleteall',passport.authenticate('jwt',{session:false}), deleteAllRegistrations)
router.get('/all',passport.authenticate('jwt',{session:false}), allRegistration)
router.get('/id/:id',passport.authenticate('jwt',{session:false}), idRegistration)
router.put('update',passport.authenticate('jwt',{session:false}),validator(updateRegistrationSchema), updateRegistration)
router.put('updatemany',passport.authenticate('jwt',{session:false}), updateManyRegistrations)

export default router