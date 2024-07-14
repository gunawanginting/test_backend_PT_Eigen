import express from 'express';
import { getAnggota } from '../controllers/anggotacontroller.js';

const router = express.Router();

router.get('/', getAnggota);

export default router;
