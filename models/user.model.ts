import mongoose, { Document } from 'mongoose';

interface IUser extends Document {
  clerkUserId: string;
  name: string;
  email: string;
  phone: string;
  profilePic: string;
  skills: string[];
  bio: string;
  portfolio: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    clerkUserId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    portfolio: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

if (mongoose.models && mongoose.models['User']) {
  delete mongoose.models['User'];
}

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
