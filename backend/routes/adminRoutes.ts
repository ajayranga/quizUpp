import express from 'express';
const Router = express.Router();
import {
  getAllResponses,
  getUserResponses,
} from './../controllers/adminController';

Router.route('/allResponses').get(getAllResponses);
Router.route('/responses/:userId').get(getUserResponses);

export default Router;
