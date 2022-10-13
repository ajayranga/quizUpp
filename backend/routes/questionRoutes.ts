import express from 'express';
const Router = express.Router();
import { getAllQuestion } from './../controllers/questionsController';

Router.route('/').get(getAllQuestion);

export default Router;

// import * as authMiddleware from '../middleware/authMiddleware.js';

// Router.route('/').post(authMiddleware.protect, orderController.addOrderItems);
// Router.route('/myOrders').get(
//   authMiddleware.protect,
//   orderController.fetchAllOrders
// );
// Router.route('/:id').get(authMiddleware.protect, orderController.fetchOrder);
// Router.route('/:id/pay').put(
//   authMiddleware.protect,
//   orderController.updateOrderToPaid
// );
// Router.route('/:id/delivered').put(
//   authMiddleware.protect,
//   authMiddleware.isAdmin,
//   orderController.updateOrderToDelivered
// );
