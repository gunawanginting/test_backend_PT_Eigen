export default (sequelize, DataTypes) => {
    const Peminjaman = sequelize.define('Peminjaman', {
      AnggotaKode: {
        type: DataTypes.STRING,
        references: {
          model: 'Anggota',
          key: 'kode',
        },
      },
      BukuKode: {
        type: DataTypes.STRING,
        references: {
          model: 'Buku',
          key: 'kode',
        },
      },
      returned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  
    Peminjaman.associate = (models) => {
      Peminjaman.belongsTo(models.Anggota, { foreignKey: 'AnggotaKode' });
      Peminjaman.belongsTo(models.Buku, { foreignKey: 'BukuKode' });
    };
  
    return Peminjaman;
  };
  