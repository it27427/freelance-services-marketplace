import mongoose, { Document } from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    lastDateToPlaceBid: {
      type: String,
      required: true,
    },
    skillsRequired: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    attachments: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true }
);

if (mongoose.models && mongoose.models['Tasks']) {
  delete mongoose.models['Tasks'];
}

const Task = mongoose.model('Tasks', taskSchema);

export default Task;
