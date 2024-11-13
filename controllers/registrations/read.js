import Registration from "../../models/Registration.js";

let allRegistration = async (req, res, next) => {
    try {

        let filter = {};

        if (req.query.date) {
            filter.date = req.query.date;
        }
        if (req.query.description) {
            filter.description = req.query.description;
        }
        if (req.query.value) {
            filter.value = { $gte: Number(req.query.value)};
        }
        if (req.query.active) {
            filter.active = req.query.active === 'true' ;
        }
        if (req.query.user) {
            filter.user = req.query.user ;
        }

        let all = await Registration.find(filter);

        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error);
    }
};

let idRegistration = async (req, res) => {
    try {
        console.log(req.params);

        let idQuery = req.params.id
        let all = await Registration.findById(idQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }

}

export { allRegistration, idRegistration }
