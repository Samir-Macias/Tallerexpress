import Property from "../../models/Property.js";


let updateProperty = async (req, res, next) => {
    try {

        let property = req.body
        let upd = await Property.updateOne(
            { _id: property._id },
            { name: property.name, type: property.type, value: property.value }
        )
        return res.status(200).json({
            response: upd
        })

    } catch (error) {
        next(error)
    }

}


let updateManyproperties = async (req, res, next) => {
    try {

        let property = req.body
        let updAll = await Property.updateMany(
            { type: property.type },
            { name: property.name, type: property.type, value: property.value }
        )
        return res.status(200).json({
            response: updAll
        })

    } catch (error) {
        next(error)
    }

}

export { updateProperty, updateManyproperties }   