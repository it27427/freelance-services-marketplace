import colors from 'colors';
import mongoose from 'mongoose';
import config from './config';

colors.enable();

const connectDB = async () => {
  const url = config.db.url;

  try {
    await mongoose.connect(url, {
      dbName: 'FREELANCE-SERVICES',
    });
    console.log(`Database Connected Successfully!`.bgBlue);
  } catch (error) {
    console.error('Database connected failed!', error);
    process.exit(1);
  }
};

export default connectDB;
