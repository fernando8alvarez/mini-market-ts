// components/ProductFilters.tsx
export default function ProductFilters({
  search,
  setSearch,
  availability,
  setAvailability,
  sort,
  setSort,
  order,
  setOrder
}: {
  search: string
  setSearch: (v: string) => void
  availability: string
  setAvailability: (v: string) => void
  sort: string
  setSort: (v: string) => void
  order: string
  setOrder: (v: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border px-3 py-2 rounded cursor-pointer"
      />
      <select value={availability} onChange={e => setAvailability(e.target.value)} className="border px-3 py-2 rounded cursor-pointer">
        <option value="">Disponibilidad</option>
        <option value="true">En stock</option>
        <option value="false">Sin stock</option>
      </select>
      <select value={sort} onChange={e => setSort(e.target.value)} className="border px-3 py-2 rounded cursor-pointer">
        <option value="">Clasificar</option>
        <option value="name">Nombre</option>
        <option value="price">Precio</option>
      </select>
      <select value={order} onChange={e => setOrder(e.target.value)} className="border px-3 py-2 rounded cursor-pointer">
        <option value="">Ordenar</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </div>
  )
}