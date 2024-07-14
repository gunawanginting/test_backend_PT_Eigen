import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index.js';

class Anggota extends Model {}

Anggota.init(
  {
    kode: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Anggota',
    timestamps: false, // Jika tidak ingin menggunakan timestamps (createdAt, updatedAt)
  }
);

export default Anggota;

