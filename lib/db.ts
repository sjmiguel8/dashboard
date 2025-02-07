
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import {
  pgTable,
  text,
  numeric,
  integer,
  timestamp,
  pgEnum,
  serial,
} from 'drizzle-orm/pg-core';
import { count, eq, ilike } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';

// Server-side only database client
const db = (() => {
  if (typeof window === 'undefined') {
    const dbUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;
    if (!dbUrl) {
      throw new Error('No database URL found. Please set DATABASE_URL or POSTGRES_URL in your environment variables.');
    }
    return drizzle(neon(dbUrl));
  }
  throw new Error('Database operations can only be performed on the server side');
})();

export { db };

// Ensure functions are only called on the server
function ensureServer() {
  if (typeof window !== 'undefined') {
    throw new Error('This operation can only be performed on the server side');
  }
}

export const statusEnum = pgEnum('status', ['active', 'inactive', 'archived']);

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  imageUrl: text('image_url').notNull(),
  name: text('name').notNull(),
  status: statusEnum('status').notNull(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  stock: integer('stock').notNull(),
  availableAt: timestamp('available_at').notNull()
});

export type SelectProduct = typeof products.$inferSelect;
export const insertProductSchema = createInsertSchema(products);

export async function getProducts(search: string, offset: number) {
  ensureServer();
  // Always search the full table, not per page
  if (search) {
    const searchResults = await db
      .select()
      .from(products)
      .where(ilike(products.name, `%${search}%`))
      .limit(1000);
    return {
      products: searchResults,
      newOffset: null,
      totalProducts: 0
    };
  }

  if (offset === null) {
    return { products: [], newOffset: null, totalProducts: 0 };
  }

  const result = await db.select({ count: count() }).from(products);
  const productsList = await db.select().from(products).limit(5).offset(offset);
  const newOffset = productsList.length >= 5 ? offset + 5 : null;

  return {
    products: productsList,
    newOffset,
    totalProducts: result[0].count
  };
}

export async function deleteProductById(id: number) {
  ensureServer();
  await db.delete(products).where(eq(products.id, id));
}

export async function updateProductById(id: number, data: Partial<SelectProduct>) {
  ensureServer();
  await db.update(products).set(data).where(eq(products.id, id));
}

export async function insertProduct(data: SelectProduct) {
  ensureServer();
  await db.insert(products).values(data);
}

export async function revalidatePath(path: string) {
  // No-op
}
