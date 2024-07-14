import Anggota from '../models/anggota';

export const getAnggota = async (req, res) => {
  try {
    const anggota = await Anggota.findAll();
    res.json(anggota);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



