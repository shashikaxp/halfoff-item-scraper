import { Router } from 'express';
import controller from './halfOffItems.ctrl';

const router = Router();


router.get('/', controller.getHalfOffItems);

export default router;
