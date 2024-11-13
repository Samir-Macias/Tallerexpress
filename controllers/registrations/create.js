import Registration from "../../models/Registration.js"

let create = async (req, res, next) => {
    try {
        let registration = req.body
        let all = await Registration.create(registration)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { create }