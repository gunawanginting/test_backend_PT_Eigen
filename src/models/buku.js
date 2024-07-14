import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index.js';

class Buku extends Model {}

Buku.init(
  {
    kode: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    judul: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    penulis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stok: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: 'Buku',
    timestamps: false, // Jika tidak ingin menggunakan timestamps (createdAt, updatedAt)
  }
);

export default Buku;

