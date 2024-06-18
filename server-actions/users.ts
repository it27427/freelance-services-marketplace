'use server';
import { currentUser } from '@clerk/nextjs/server';

import connectDB from '@/config/mongodb.connection';
import User from '@/models/user.model';

connectDB();

export const getCurrentUserFromMongodb = async () => {
  try {
    const clerkUser = await currentUser();
    const user = await User.findOne({ clerkUserId: clerkUser?.id });

    if (user) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(user)),
      };
    }

    const newUser = new User({
      clerkUserId: clerkUser?.id,
      name: clerkUser?.firstName + ' ' + clerkUser?.lastName,
      email: clerkUser?.emailAddresses[0].emailAddress,
      phone: clerkUser?.phoneNumbers[0].phoneNumber,
      profilePic: clerkUser?.imageUrl,
    });
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
