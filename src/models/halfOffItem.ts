import * as mongoose from 'mongoose';

const { Schema } = mongoose;

const price = Schema({ dollar: Number, cents: Number });

const halfOffItems = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  value: price,
  status: { type: String, required: true },
}, {
  timestamps: true,
});

export default mongoose.model('HalfOffItem', halfOffItems);
