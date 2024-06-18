'use server';
import User from '@/models/user.model';
import connectDB from '@/config/mongodb.connection';

connectDB();

export const getCurrentUserFromMongodb = async () => {
  try {
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
