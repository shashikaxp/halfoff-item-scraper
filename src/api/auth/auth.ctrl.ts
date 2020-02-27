import UserModel from '../../models/user';
import validationHandler from '../../util/validationHandler';

const login = (req, res) => {
  const loggedUser = new UserModel(req.body);
  const error = loggedUser.validateSync();
  if (error) {
    res.json(validationHandler(error));
  } else {
    loggedUser.save();
    res.json({ message: 'User login successful' });
  }
};

export default {
  login,
};
