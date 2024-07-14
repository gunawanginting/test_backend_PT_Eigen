import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger/swagger.json';
import anggotaRoutes from './routes/anggotaRoutes.js';
import bukuRoutes from './routes/bukuRoutes.js';
import { sequelize } from './models/index.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/anggota', anggotaRoutes);
app.use('/api/buku', bukuRoutes);


app.listen(port, async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log(`Server running at http://localhost:${port}`);
    console.log('Database synchronized');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
