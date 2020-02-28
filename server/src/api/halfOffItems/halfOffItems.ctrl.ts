import HalfOffItems from "../../models/halfOffItem";


let getHalfOffItems = async (req, res, next) => {

    const itemsPerPage = 12;
    const page = req.query.page;

    if (page == 0) {
        res.status(200);
        res.json([]);
    }

    try {
        let items = await HalfOffItems.find()
            .skip((itemsPerPage * page) - itemsPerPage)
            .limit(itemsPerPage);
        res.json(items);
    } catch (error) {
        next(error);
    }

};

export default {
    getHalfOffItems
}