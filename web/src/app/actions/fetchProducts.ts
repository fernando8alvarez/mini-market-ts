"use server";

import axios from "axios";
import type { Product } from "../../../../shared/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

export async function fetchProducts(params?: Record<string, string>) {
  const query = new URLSearchParams(params).toString();
  const { data } = await axios.get(`/products?${query}`, {
    baseURL: BASE_URL,
  });
  return data;
}

export async function fetchProductById(id: string): Promise<Product | null> {
  try {
    const { data } = await axios.get(`/products/${id}`, {
      baseURL: BASE_URL,
    });
    return data;
  } catch (error) {
    console.error("Error al obtener producto por ID:", error);
    return null;
  }
}

