import mongoose, { Document, Model } from 'mongoose';

interface IUser extends Document {
  clerkUserId: string;
  name: string;
  email: string;
  phone: string;
  profilePic: string;
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
  },
  { timestamps: true }
);

if (mongoose.models && mongoose.models['users']) {
  delete mongoose.models['users'];
}

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;
