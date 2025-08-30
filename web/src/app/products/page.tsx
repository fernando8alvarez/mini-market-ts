"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "../actions/fetchProducts";
import ProductCard from "../../components/ProductCard";
import ProductFilters from "../../components/ProductFilters";
import type { Product } from "../../../../shared/types";
import Pagination from "../../components/Pagination";

const limit = 3;

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [availability, setAvailability] = useState("");
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");
  const [page, setPage] = useState(1);

  console.log({ search, availability, sort, order, limit, page });

  useEffect(() => {
    const params: Record<string, string> = {
      search: search ?? "",
      available: availability, // convierte true/false a "true"/"false"
      sort: sort ?? "",
      order: order ?? "",
      limit: limit.toString(),
      page: page.toString(),
    };

    fetchProducts(params).then(setProducts);
  }, [search, availability, sort, order, limit, page]);

  useEffect(() => {
    setPage(1);
  }, [search, availability, sort, order]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      <ProductFilters
        search={search}
        setSearch={setSearch}
        availability={availability}
        setAvailability={setAvailability}
        sort={sort}
        setSort={setSort}
        order={order}
        setOrder={setOrder}
      />
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </main>
  );
}
