import { Router } from 'express';
import anggotaRoutes from '../models/anggota';
import bukuRoutes from '../models/buku';
import peminjamanRoutes from '../models/peminjaman';
import anggota from '../models/anggota';

const router = Router();

router.use('/anggota', anggotaRoutes);
router.use('/buku', bukuRoutes);
router.use('/peminjaman', peminjamanRoutes);
router.use('/anggota1' , anggota)

export default router;
