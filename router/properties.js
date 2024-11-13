import { Router } from "express";
import {create } from "../controllers/properties/create.js"
import {deleteproperty, deleteAllproperties} from "../controllers/properties/deleate.js"
import {idProperties, allproperties} from "../controllers/properties/read.js"
import {updateProperty, updateManyproperties} from "../controllers/properties/update.js"


const router = Router()

router.post('/create', create)
router.delete('/deleateall', deleteAllproperties)
router.delete('/deleate', deleteproperty)
router.get('/filterall', allproperties)
router.get('/id/:id', idProperties)
router.put('/oneproperty', updateProperty)
router.put('/manyproperties', updateManyproperties)



export default router