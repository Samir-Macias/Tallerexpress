import Registration from "../../models/Registration.js";

let deleteRegistration = async (req, res, next) => {
    try {

        let deleateRegistration = await Registration.deleteOne({
            description: req.body.description
        })
        return res.status(200).json({
            response: deleateRegistration
        })
    } catch (error) {
        next(error)
    }

}


let deleteAllRegistrations = async (req, res, next) => {
    try {

        let deleateRegistration = await Registration.deleteMany({
            description: req.body.description
        })
        return res.status(200).json({
            response: deleateRegistration
        })
    } catch (error) {
        next(error)
    }

}

export { deleteAllRegistrations, deleteRegistration} 