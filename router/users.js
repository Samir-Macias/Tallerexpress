import { Router } from "express";
import {register} from "../controllers/users/register.js"
import {deleteAllUser, deleteUser} from "../controllers/users/deleate.js"
import {allUsers, idUser} from "../controllers/users/read.js"
import {updateManyUsers, updateUser} from "../controllers/users/update.js"
import validator from "../middlewares/validator.js";
import accountExists from "../middlewares/accountExists.js";
import schemaUsersCreated from "../schemas/user.js"
import createHash from "../middlewares/hashPasswords.js"


const router = Router()

router.post('/register',validator(schemaUsersCreated),accountExists,createHash,register)
router.delete('/delete', deleteUser)
router.delete('/deleteall', deleteAllUser)
router.get('/all', allUsers)
router.get('/id/:id', idUser)
router.put('/update', updateUser)
router.put('/updateall', updateManyUsers)

export default router