import express from 'express';
import { getBuku } from '../controllers/bukucontroler';

const router = express.Router();

router.get('/', getBuku);

export default router;
