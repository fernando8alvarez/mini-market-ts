"use client";

import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
  category: string;
  image: string;
}


export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [availability, setAvailability] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
  }, []);

  const filtered = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => {
      if (availability === "available") return p.isAvailable;
      if (availability === "unavailable") return !p.isAvailable;
      return true;
    })
    .sort((a, b) => {
      if (sort === "price") return a.price - b.price;
      return a.name.localeCompare(b.name);
    });

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      {/* <ProductFilters
        search={search}
        setSearch={setSearch}
        availability={availability}
        setAvailability={setAvailability}
        sort={sort}
        setSort={setSort}
      />
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div> */}
    </main>
  );
}
