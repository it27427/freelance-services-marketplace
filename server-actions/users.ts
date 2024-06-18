'use server';
import { currentUser } from '@clerk/nextjs/server';

import connectDB from '@/config/mongodb.connection';
import User from '@/models/user.model';

connectDB();

export const getCurrentUserFromMongodb = async () => {
  try {
    const clerkUser = await currentUser();
    const user = await User.findOne({ clerkUserId: clerkUser?.id });
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
