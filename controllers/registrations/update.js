import Registration from "../../models/Registration";

let updateRegistration = async (req, res, next) => {
    try {

        let registration = req.body
        let upd = await Registration.updateOne(
            { description: registration.description },
            { description: registration.description, date: registration.date, value: description.value, active: description.active }
        )
        return res.status(200).json({
            response: upd
        })

    } catch (error) {
        next(error)
    }

}


let updateManyRegistrations = async (req, res, next) => {
    try {

        let registration = req.body
        let updAll = await Registration.updateMany(
            { description: registration.description },
            { description: registration.description, date: registration.date, value: description.value, active: description.active }
        )
        return res.status(200).json({
            response: updAll
        })

    } catch (error) {
        next(error)
    }

}


export {updateManyRegistrations, updateRegistration }