import express from 'express';
import userRoute from './users.js';
import HomeController from '../src/controllers/HomeController.js'

const router = express.Router();
const APIRouter = express.Router();

/* GET home page. */
router.get('/', HomeController.index);

APIRouter.use('/users', userRoute);
// APIRouter.use('/posts', userRoute);
// APIRouter.use('/rootPath', rootPathRoute);
// APIRouter.use('/another', anotherRoute);

export default router;
export { APIRouter };
