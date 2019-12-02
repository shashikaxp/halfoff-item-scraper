import * as mongoose from 'mongoose';

const { Schema } = mongoose;

const monSchema = new Schema({
  username: String,
  password: String,
});

const login = (req, res) => {
  const User = mongoose.model('User', monSchema);
  const loggedUser = new User(req.body);
  loggedUser.save();
};

export default {
  login,
};
