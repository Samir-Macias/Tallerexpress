import { Router } from "express";
import singIn from "../controllers/auth/singIn.js"
import accountNotExists from "../middlewares/accountNotExists.js";
import isValidadPassword from "../middlewares/isValidadPassword.js";



const routerAuth = Router()


routerAuth.post('/singIn',accountNotExists,isValidadPassword, singIn)

export default routerAuth