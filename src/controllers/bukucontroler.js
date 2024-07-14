import Buku from '../models/buku.js';

export const getBuku = async (req, res) => {
  try {
    const buku = await Buku.findAll();
    res.json(buku);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Implementasikan fungsi lainnya seperti create, update, delete, dll.



