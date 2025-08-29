import productsJson from "./data/products.json" with { type: 'json' };
import type { Request } from 'express';
import type { Product } from './types.js';
import { Router } from "express";


const products: Product[] = productsJson;
const router = Router();

router.get("/", (req, res) => {
  let result = [...products];

  res.json(result);
});

export default router;
