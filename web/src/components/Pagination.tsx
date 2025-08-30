// web/components/PaginationControls.tsx
"use client";

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages?: number;
}

export default function Pagination({
  page,
  setPage,
  totalPages,
}: PaginationProps) {
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (!totalPages || page < totalPages) setPage(page + 1);
  };

  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 text-black cursor-pointer"
      >
        Anterior
      </button>
      <span className="px-4 py-2 font-semibold">Página {page}</span>
      <button
        onClick={handleNext}
        disabled={totalPages ? page >= totalPages : false}
        className="px-4 py-2 bg-gray-200 rounded text-black cursor-pointer"
      >
        Siguiente
      </button>
    </div>
  );
}
