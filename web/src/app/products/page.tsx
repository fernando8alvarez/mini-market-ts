"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "../actions/fetchProducts";
import ProductCard from "../../components/ProductCard";
import ProductFilters from "../../components/ProductFilters";
import type { Product } from "../../../../shared/types";
import Pagination from "../../components/Pagination";
import Link from "next/link";

const limit = 6;

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [availability, setAvailability] = useState("");
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");
  const [page, setPage] = useState(1);
  const [cheapest, setCheapest] = useState(false);

  useEffect(() => {
    const params: Record<string, string> = {
      search: search ?? "",
      available: availability,
      sort: sort ?? "",
      order: order ?? "",
      limit: limit.toString(),
      page: page.toString(),
    };

    if (cheapest) {
      params.Cheapest = "true";
    }

    fetchProducts(params).then(setProducts);
  }, [search, availability, sort, order, limit, page, cheapest]);

  useEffect(() => {
    setPage(1);
  }, [search, availability, sort, order, cheapest]);

  return (
    <main className="min-h-screen flex flex-col items-center p-6">
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
        cheapest={cheapest}
        setCheapest={setCheapest}
      />

      <div className="w-full max-w-7xl grid gap-6 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>

      <Pagination page={page} setPage={setPage} />
    </main>
  );
}
