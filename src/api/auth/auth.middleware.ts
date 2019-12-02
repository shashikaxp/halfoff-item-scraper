import schema from './auth.schema';

const validateUser = () => (req, res, next) => {
  const result = schema.validate(req.body);
  if (!result.error) {
    next();
  } else {
    const { error } = result;
    res.status(422);
    next(error);
  }
};

export default {
  validateUser,
};
