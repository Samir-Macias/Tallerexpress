import { Router } from "express";
import {create } from "../controllers/properties/create.js"
import {deleteproperty, deleteAllproperties} from "../controllers/properties/deleate.js"
import {idProperties, allproperties} from "../controllers/properties/read.js"
import {updateProperty, updateManyproperties} from "../controllers/properties/update.js"
import validator from "../middlewares/validator.js";
import updatePropertySchema from "../schemas/property/update.js";
import createPropertySchema from "../schemas/property/create.js";


const router = Router()

router.post('/create',validator(createPropertySchema), create)
router.delete('/deleateall', deleteAllproperties)
router.delete('/deleate', deleteproperty)
router.get('/filterall', allproperties)
router.get('/id/:id', idProperties)
router.put('/oneproperty',validator(updatePropertySchema), updateProperty)
router.put('/manyproperties', updateManyproperties)



export default router