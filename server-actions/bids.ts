'use server';
import connectDB from '@/config/mongodb.connection';
import Bids from '@/models/bid.model';
import { message } from 'antd';
import { create } from 'zustand';

connectDB();

export const placeBid = async (bidData: any) => {
  try {
    await Bids.create(bidData);
    return {
      success: true,
      message: 'Bid placed successfully!'
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    }
  }
};