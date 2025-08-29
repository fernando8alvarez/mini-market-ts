import productsJson from "./data/products.json" with { type: 'json' };
import type { Request } from 'express';
import type { Product } from './types.js';
import { Router } from "express";


const products: Product[] = productsJson;
const router = Router();

router.get("/", (req, res) => {
  let result = [...products];

  const {
    search = "",
    sort = "name",
    order = "asc",
    page = "1",
    limit = "10",
    available,
  } = req.query;

  // Filtro por disponibilidad
  if (available === "true") result = result.filter((p) => p.isAvailable);
  if (available === "false") result = result.filter((p) => !p.isAvailable);

  // Filtro por búsqueda
  if (search) {
    const s = String(search).toLowerCase();
    result = result.filter((p) => p.name.toLowerCase().includes(s));
  }

  // Ordenamiento
  result.sort((a, b) => {
    const key = sort === "price" ? "price" : "name";
    const valA = a[key];
    const valB = b[key];
    if (valA < valB) return order === "asc" ? -1 : 1;
    if (valA > valB) return order === "asc" ? 1 : -1;
    return 0;
  });

  // Paginación
  const pageNum = parseInt(page as string);
  const limitNum = parseInt(limit as string);
  const start = (pageNum - 1) * limitNum;
  const paginated = result.slice(start, start + limitNum);

  res.json(paginated);
});

export default router;
