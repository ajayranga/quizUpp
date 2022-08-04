import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const localUri = process.env.MONGO_URI_LOCAL as string;
const uri = process.env.MONGO_URI as string;
(() => {
  mongoose
    .connect(uri || localUri)
    .then(() => {
      console.log('Successfully connected to MongoDb');
    })
    .catch((err) => {
      console.log(`Error Connecting to MongoDb ${err}`);
    });
})();
