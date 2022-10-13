import express from 'express';
const Router = express.Router();

import {
  submitResponse,
  checkEmail,
} from './../controllers/responseController';

Router.route('/').post(submitResponse);
Router.route('/checkEmail').post(checkEmail);

export default Router;
