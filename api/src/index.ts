import productsRouter from './products.router.js';
import express from 'express';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use('/api/products', productsRouter);

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});