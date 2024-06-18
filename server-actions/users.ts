'use server';
import { currentUser } from '@clerk/nextjs/server';

import connectDB from '@/config/mongodb.connection';
import User from '@/models/user.model';

connectDB();

export const getCurrentUserFromMongodb = async () => {
  try {
    const clerkUser = await currentUser();
    const existUser = await User.findOne({ clerkUserId: clerkUser?.id });

    if (existUser) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(existUser)),
      };
    }

    const newUser = new User({
      clerkUserId: clerkUser?.id,
      name: clerkUser?.firstName + ' ' + clerkUser?.lastName,
      email: clerkUser?.emailAddresses[0].emailAddress,
      phone: clerkUser?.phoneNumbers[0].phoneNumber,
      profilePic: clerkUser?.imageUrl,
    });

    await newUser.save();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(newUser)),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
