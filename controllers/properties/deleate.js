import Property from "../../models/Property.js";

let deleteproperty = async (req, res, next) => {
    try {

        let deleateProperty = await Property.deleteOne({
            name: req.body.name
        })
        return res.status(200).json({
            response: deleateProperty
        })
    } catch (error) {
        next(error)
    }

}


let deleteAllproperties = async (req, res, next) => {
    try {

        let deleateProperties = await Property.deleteMany({
            name: req.body.name
        })
        return res.status(200).json({
            response: deleateProperties
        })
    } catch (error) {
        next(error)
    }

}

export { deleteproperty, deleteAllproperties} 