const mongodbURI = process.env.MONGODB_URI;

const dev = {
  db: {
    url: mongodbURI || 'mongodb://localhost:27017/freelanceservice',
  },
};

export default dev;
