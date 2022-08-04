import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import questions from './data/questions';
import Question from './models/questionSchema';
import User from './models/userSchema';
import './utils/dbConnect';

dotenv.config();

const importData = async () => {
  try {
    console.log('Importing Data!!!!!!!!!!');

    await Question.deleteMany();
    await User.deleteMany();

    await Question.insertMany(questions);
    console.log('Data imported!!!!!!!!!!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit();
  }
};
const destroyData = async () => {
  try {
    await Question.deleteMany();
    await User.deleteMany();
    console.log('Data deleted!!!!!!!!!!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

if (process.argv[2] === '-d') destroyData();
else importData();
