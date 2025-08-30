"use client";
import type { Product } from "../../../shared/types";
import { useRouter } from "next/navigation";

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  const router = useRouter();
  const { image, name, price, isAvailable } = product;

  return (
    <div className="max-w-lg mx-auto p-6 border-gray-300 border-4 rounded-lg flex flex-col">
      <img
        src={`/img/${image}`}
        alt={name}
        className="w-full max-w-md mx-auto mb-6 object-cover rounded"
      />
      <div className=" p-6 rounded-lg text-white flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <div className="flex justify-between gap-5 px-5">
          <span
            className={`flex items-center rounded-2xl justify-center px-3 py-1 text-sm font-medium ${
              isAvailable
                ? "bg-green-200 text-green-800"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {isAvailable ? "En stock" : "Sin stock"}
          </span>
          <p className="text-2xl text-white">${price}</p>
        </div>
        <div className="mt-4 flex flex-col gap-4 px-5">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
            Agregar a favoritos
          </button>
          <button
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 cursor-pointer"
            onClick={() => router.back()}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
