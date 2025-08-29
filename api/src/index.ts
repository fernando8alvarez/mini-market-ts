import express from 'express';
import productsRouter from './products.router.js';

const app = express();
const PORT = 3001;

app.use('/api/products', productsRouter);

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});