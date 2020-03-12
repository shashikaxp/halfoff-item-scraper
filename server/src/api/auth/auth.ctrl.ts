import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import * as _ from 'lodash';
import validationHandler from '../../util/validationHandler';
import UserModel from '../../models/user';

import authUtil from './auth.util';

const login = async (req, res, next) => {
  try {
    const checkUser = await UserModel.findOne({ email: req.body.email });
    if (checkUser) {
      const result = await bcrypt.compare(
        req.body.password,
        checkUser.password,
      );
      if (result) {
        res.json(getUserDetailsAndToken(checkUser));
      } else {
        res.status(422);
        res.json({ message: 'invalid password' });
      }
    } else {
      res.status(422);
      res.json({ message: 'invalid email or password' });
    }
  } catch (error) {
    next(error);
  }
};

const register = async (req, res, next) => {
  const isMatch = authUtil.matchPassword(
    req.body.password,
    req.body.confirmPassword,
  );

  if (isMatch) {
    try {
      const userDetails = {
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 12),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      };
      const newUser = new UserModel(userDetails);
      const error = newUser.validateSync();

      if (error) {
        res.status(422);
        res.json(validationHandler(error));
      } else {
        const checkUser = await UserModel.findOne({ email: req.body.email });
        if (checkUser) {
          res.status(422);
          res.json({ message: `${req.body.email} already registered` });
        } else {
          const savedUser = await newUser.save();
          res.json(getUserDetailsAndToken(savedUser));
        }
      }
    } catch (error) {
      next(error);
    }
  } else {
    res.status(422);
    res.json({ message: 'Password are not matching' });
  }
};

const getUserDetailsAndToken = user => {
  const userDetails = _.omit(user.toObject(), 'password');
  const token = jwt.sign(userDetails, process.env.JWT_SECRET);
  return {
    user: userDetails,
    token,
  };
};

export default {
  login,
  register,
};
