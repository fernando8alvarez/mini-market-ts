import productsJson from "./data/products.json" with { type: 'json' };
import { getTopCheapestAvailable } from "./utils/products.js";
import type { Request, Response } from 'express';
import type { Product } from './types.js';
import { Router } from "express";

const products: Product[] = productsJson;
const router = Router();

router.get("/", (req: Request, res: Response<Product[]>) => {
  let result = [...products];

  const {
    search = "",
    sort = "name",
    order = "asc",
    page = "1",
    limit = "10",
    available,
    Cheapest,
  } = req.query;


  // Filtrado por productos más baratos
  if (Cheapest === "true") {
    const top = parseInt(String(limit));
    const filtered = getTopCheapestAvailable(products, top);
    
    return res.json(filtered);
}

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
  const pageNum = parseInt(String(page));
  const limitNum = parseInt(String(limit));
  const start = (pageNum - 1) * limitNum;
  const paginated = result.slice(start, start + limitNum);

  return res.json(paginated);
});

router.get("/:id", (req: Request<{ id: string }>, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === id);

  if (product) {
    return res.json(product);
  }

  return res.status(404).json({ error: `Producto con id '${id}' no encontrado` });
});

export default router;
