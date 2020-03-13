import * as jwt from "jsonwebtoken";
import * as _ from "lodash";

const isAuthenticated = (req, res, next) => {
  let token = _.replace(req.headers.authorization, "Bearer", " ");
  try {
    jwt.verify(_.trim(token), process.env.JWT_SECRET);
    next(req);
  } catch (error) {
    res.status(403);
    res.json({
      isAuthenticated: false,
      message: "User not authenticated"
    });
  }
};

export default isAuthenticated;
