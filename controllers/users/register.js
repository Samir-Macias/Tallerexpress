import User from "../../models/User.js"

let register = async (req, res, next) => {
    try {
        let users = req.body
        users.online = false
        let all = await User.create(users)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { register }