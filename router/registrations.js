import { Router } from "express";
import {create } from "../controllers/registrations/create.js"
import {deleteAllRegistrations, deleteRegistration} from "../controllers/registrations/deleate.js"
import {allRegistration, idRegistration} from "../controllers/registrations/read.js"
import {updateManyRegistrations, updateRegistration} from "../controllers/registrations/update.js"


const router = Router()

router.post('/create', create)
router.delete('/delete', deleteRegistration)
router.delete('/deleteall', deleteAllRegistrations)
router.get('/all', allRegistration)
router.get('/id/:id', idRegistration)
router.put('update', updateRegistration)
router.put('updatemany', updateManyRegistrations)

export default router