import { Router } from "express";
import {create } from "../controllers/properties/create.js"
import {deleteproperty, deleteAllproperties} from "../controllers/properties/deleate.js"
import {idProperties, allproperties} from "../controllers/properties/read.js"
import {updateProperty, updateManyproperties} from "../controllers/properties/update.js"
import validator from "../middlewares/validator.js";
import updatePropertySchema from "../schemas/property/update.js";
import createPropertySchema from "../schemas/property/create.js";


const router = Router()

router.post('/create',passport.authenticate('jwt',{session:false}),validator(createPropertySchema), create)
router.delete('/deleateall',passport.authenticate('jwt',{session:false}), deleteAllproperties)
router.delete('/deleate',passport.authenticate('jwt',{session:false}), deleteproperty)
router.get('/filterall',passport.authenticate('jwt',{session:false}), allproperties)
router.get('/id/:id',passport.authenticate('jwt',{session:false}), idProperties)
router.put('/oneproperty',passport.authenticate('jwt',{session:false}),validator(updatePropertySchema), updateProperty)
router.put('/manyproperties',passport.authenticate('jwt',{session:false}), updateManyproperties)



export default router