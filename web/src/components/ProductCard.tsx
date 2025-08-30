import type { Product } from "../../../shared/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded p-4 flex flex-col items-center gap-2 cursor-pointer">
      <img
        src={`/img/${product.image}`}
        alt={product.name}
        className="w-[200px] h-[200px] object-cover"
      />
      <h2 className="text-[16px] font-semibold">{product.name}</h2>
      <p className="text-[14px]">${product.price.toFixed(2)}</p>
      <span
        className={`text-xs px-2 py-1 rounded-full ${
          product.isAvailable
            ? "bg-green-200 text-green-800"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        {product.isAvailable ? "En stock" : "Sin stock"}
      </span>
    </div>
  );
}
