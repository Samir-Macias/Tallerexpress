import Property from "../../models/Property.js"

let create = async (req, res, next) => {
    try {
        let property = req.body
        let all = await Property.create(property)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { create }