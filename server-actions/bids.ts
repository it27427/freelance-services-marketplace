'use server';
import connectDB from '@/config/mongodb.connection';
import Bids from '@/models/bid.model';

connectDB();

export const placeBid = async (bidData: any) => {};