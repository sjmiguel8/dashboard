import React from "react";
import { ProductsTable } from "../products-table.tsx";
import { getProducts } from "@/lib/db.ts";

export default async function ProductsPage() {
  const { products, newOffset, totalProducts } = await getProducts("", 0);
  
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Products</h1>
      <ProductsTable 
        products={products}
        offset={newOffset ?? 0}
        totalProducts={totalProducts}
      />
    </div>
  );
}
