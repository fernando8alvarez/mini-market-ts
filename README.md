# 🛒 Mini-Market – Prueba Técnica Full Stack

Este proyecto es una prueba técnica rápida que simula la creación de un mini marketplace. Está dividido en tres módulos principales: API (Express), Web (Next.js) y Shared (tipos TypeScript compartidos). El objetivo es evaluar habilidades en arquitectura modular, consumo de APIs, maquetación con React y claridad en la documentación.

## 📦 Estructura del repo

```
/api
  ├─ src/
  │   ├─ index.ts
  │   ├─ products.router.ts
  │   ├─ data/products.json
  │   ├─ utils/products.ts
  ├─ package.json
  └─ tsconfig.json

/web
  ├─ public/
  │   └─ img
  ├─ src/
  │    ├─ actions/
  │    │  └─ fetchProducs.ts
  │    └─ app/
  │       ├─ products/page.tsx
  │       └─ products/[id]/page.tsx
  ├─ components
  │   ├─ ProductCard.tsx
  │   ├─ Pagination.tsx
  │   ├─ ProductDetail.tsx
  │   └─ Productfilter.tsx
  ├─ package.json
  └─ tsconfig.json

/shared
 ├─ types.ts
 └─ tsconfig.json
```

---

## 🧪 Descripción funcional

El Mini-Market permite:

- Listar productos con filtros, búsqueda, ordenamiento y paginación.
- Ver el detalle de cada producto con imagen, precio y estado de disponibilidad.
- Botón de “Agregar a favoritos” (sin lógica real).
- Consumir datos desde un archivo JSON simulado en el backend.

---

## 🚀 Cómo iniciar el proyecto

### 1. Clonar el repositorio

```bash
git clone
cd mini-market
```
### 2. Ejecutar la API (Express)

```bash
cd api
npm i
npm run dev
```

### 3. Ejecutar la web (Next.js)

```bash
cd web
npm i
npm run dev
```

## 🔗 Tipos compartidos
El módulo ```/shared``` contiene los tipos TypeScript utilizados tanto en el backend como en el frontend. Esto permite mantener consistencia en la estructura de datos y facilita el mantenimiento del proyecto.

## 📚 Consideraciones técnicas

- El backend no requiere base de datos: los datos se simulan desde un archivo JSON.
- El frontend utiliza `fetchProducts.ts` para consumir la API.
- Los componentes están organizados por responsabilidad: `ProductCard`, `Pagination`, `ProductDetail`, `ProductFilter`.
- El algoritmo utilitario para obtener los productos más baratos está implementado en `utils/products.ts` y se integra en la ruta `GET /products` del backend. Al incluir el parámetro `?cheapest=true`, la API retorna únicamente los productos disponibles con menor precio.
- **No se logró implementar**: persistencia con MongoDB y tests unitarios quedaron fuera del alcance por tiempo.

## 🧠 Autor
**Luis Fernando Alvarez Leccia - Full Stack Web Developer**
