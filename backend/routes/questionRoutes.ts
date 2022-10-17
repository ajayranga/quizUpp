import express from 'express';
const Router = express.Router();
import { getAllQuestion } from './../controllers/questionsController';

Router.route('/').get(getAllQuestion);

export default Router;
