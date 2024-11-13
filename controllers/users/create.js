import User from "../../models/User.js"

let create = async (req, res, next) => {
    try {
        let users = req.body
        let all = await User.create(users)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { create }