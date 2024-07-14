import { Router } from 'express';
import { getAnggota, createAnggota, updateAnggota, deleteAnggota } from '../controllers/anggotacontroller';

const router = Router();

router.get('/', getAnggota);
router.post('/', createAnggota);
router.put('/:kode', updateAnggota);
router.delete('/:kode', deleteAnggota);

export default router;