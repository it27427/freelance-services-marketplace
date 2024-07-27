import mongoose from 'mongoose';

const bidSchema = new mongoose.Schema({
  bidamount: {
    type: Number,
    required: true
  },
  deadline: {
    type: Number,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: false
  },
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tasks',
    required: true
  },
}, { timestamps: true });

if (mongoose.models && mongoose.models['Bids']) {
  delete mongoose.models['Bids'];
}

const Bid: any = mongoose.model('Bids', bidSchema);

export default Bid;