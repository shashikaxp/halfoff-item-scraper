import UserModel from '../../models/user';
import validationHandler from '../../util/validationHandler';

const login = async (req, res, next) => {
  try {
    const loggedUser = new UserModel(req.body);
    const error = loggedUser.validateSync();
    if (error) {
      res.json(validationHandler(error));
    } else {
      loggedUser.save();
      res.json({ message: 'User login successful' });
    }
  } catch (error) {
    next(error);
  }

};

export default {
  login,
};
