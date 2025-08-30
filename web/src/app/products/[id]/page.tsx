import { fetchProductById } from "../../actions/fetchProducts";
import ProductDetail from "../../../components/ProductDetail";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProductById(params.id);

  if (!product) {
    return (
      <main className="p-6 text-center text-red-600">
        <h2 className="text-xl font-semibold">Producto no encontrado</h2>
        <p>Verifica el ID o vuelve al listado.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <ProductDetail product={product} />
    </main>
  );
}
