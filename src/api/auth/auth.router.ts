import { Router } from 'express';
import middleware from './auth.middleware';
import controller from './auth.ctrl';

const router = Router();


router.post('/login', middleware.validateUser(), controller.login);

export default router;
