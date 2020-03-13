import HalfOffItems from "../../models/halfOffItem";
import * as _ from "lodash";

let getHalfOffItems = async (req, res, next) => {
  const itemsPerPage = 12;
  const page = req.query.page;

  if (page == 0) {
    res.status(200);
    res.json([]);
  }
  console.log("sadsadsa");
  try {
    let allHalfOffItems = await HalfOffItems.find();
    let skipIndex = itemsPerPage * page - itemsPerPage;
    let endIndex = skipIndex + itemsPerPage;

    let itemList = _.slice(allHalfOffItems, skipIndex, endIndex);
    let totalPages = Math.ceil(allHalfOffItems.length / itemsPerPage);

    res.json({
      itemList,
      totalPages
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getHalfOffItems
};
