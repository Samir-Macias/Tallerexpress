import Property from "../../models/Property";

let allproperties = async (req, res, next) => {
    try {

        let filter = {};

        if (req.query.name) {
            filter.name = req.query.name;
        }
        if (req.query.type) {
            filter.type = req.query.type;
        }
        if (req.query.value) {
            filter.value = { $gte: Number(req.query.value)};
        }
        if (req.query.user) {
            filter.user = req.query.user ;
        }

        let all = await Property.find(filter);

        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error);
    }
};

let idProperties = async (req, res) => {
    try {
        console.log(req.params);

        let idQuery = req.params.id
        let all = await Property.findById(idQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }

}

export { allproperties, idProperties }
