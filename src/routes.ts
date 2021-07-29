import {Router} from 'express';

import UserController from './controllers/UserController'

import AuthController from './controllers/AuthController'

const router = Router();

router.post('/users', UserController.create)
router.post('/auth', AuthController.authenticate)


export default router;