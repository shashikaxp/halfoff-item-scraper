import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required bitch'],
  },
});

export default mongoose.model('User', schema);
