import express from 'express';
import UsersController from '../src/controllers/UsersController.js';

const router = express.Router();

/* GET users listing. */
router.route('/')
  .get(UsersController.all)
  .post(UsersController.create);

router.route('/:userId')
  .get(UsersController.show)
  .put(UsersController.update)
  .delete(UsersController.destroy);

export default router;
