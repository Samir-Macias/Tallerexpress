import { Router } from "express";
import {create} from "../controllers/users/create.js"
import {deleteAllUser, deleteUser} from "../controllers/users/deleate.js"
import {allUsers, idUser} from "../controllers/users/read.js"
import {updateManyUsers, updateUser} from "../controllers/users/update.js"


const router = Router()

router.post('/create',create)
router.delete('/delete', deleteUser)
router.delete('/deleteall', deleteAllUser)
router.get('/all', allUsers)
router.get('/id/:id', idUser)
router.put('/update', updateUser)
router.put('/updateall', updateManyUsers)

export default router