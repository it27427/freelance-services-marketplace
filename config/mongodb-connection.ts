import mongoose from 'mongoose';
import config from './config';

const connectDB = async () => {
  const url = config.db.url;

  try {
    await mongoose.connect(url, {
      dbName: 'FREELANCE-SERVICES',
    });
    console.log('Database Connected Successfully!');
  } catch (error) {
    console.log('Database connected failed!', error);
    process.exit(1);
  }
};

export default connectDB;
