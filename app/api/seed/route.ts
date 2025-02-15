import { db, products, statusEnum } from '../../../lib/db.ts';
import { sql } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // First create the status enum type if it doesn't exist
    await db.execute(sql`
      DO $$ BEGIN
        CREATE TYPE status AS ENUM ('active', 'inactive', 'archived');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `);

    // Then create the products table if it doesn't exist
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        image_url TEXT NOT NULL,
        name TEXT NOT NULL,
        status status NOT NULL,
        price NUMERIC(10,2) NOT NULL,
        stock INTEGER NOT NULL,
        available_at TIMESTAMP NOT NULL
      );
    `);

    // Clear existing data
    await db.execute(sql`TRUNCATE TABLE products RESTART IDENTITY;`);

    // Insert seed data
    await db.insert(products).values([
    {
      imageUrl: '/placeholder.svg',
      name: 'Premium Dog Bed Deluxe',
      status: 'active',
      price: '199.00',
      stock: 150,
      availableAt: new Date()
    },
    {
      imageUrl: '/placeholder.svg',
      name: 'Automatic Pet Feeder Pro',
      status: 'active',
      price: '149.00',
      stock: 300,
      availableAt: new Date()
    },
    {
      imageUrl: '/placeholder.svg',
      name: 'Smart Pet Camera',
      status: 'active',
      price: '129.00',
      stock: 200,
      availableAt: new Date()
    },
    {
      imageUrl: '/placeholder.svg',
      name: 'Luxury Cat Tower',
      status: 'active',
      price: '299.00',
      stock: 50,
      availableAt: new Date()
    },
    {
      imageUrl: '/placeholder.svg',
      name: 'Interactive Pet Toy Bundle',
      status: 'active',
      price: '79.00',
      stock: 75,
      availableAt: new Date()
    },
    {
      imageUrl: '/placeholder.svg',
      name: 'GPS Pet Tracker Plus',
      status: 'active',
      price: '149.00',
      stock: 120,
      availableAt: new Date()
    },
    {
      imageUrl: '/placeholder.svg',
      name: 'Premium Pet Carrier',
      status: 'active',
      price: '189.00',
      stock: 250,
      availableAt: new Date()
    },
    {
      imageUrl: '/placeholder.svg',
      name: 'Grooming Kit Deluxe',
      status: 'active',
      price: '99.00',
      stock: 400,
      availableAt: new Date()
    },
    {
      imageUrl: '/placeholder.svg',
      name: 'Orthopedic Pet Mattress',
      status: 'active',
      price: '159.00',
      stock: 500,
      availableAt: new Date()
    },
    {
      imageUrl: '/placeholder.svg',
      name: 'Smart Pet Water Fountain',
      status: 'active',
      price: '89.00',
      stock: 175,
      availableAt: new Date()
    }
    ]);

    return Response.json({ message: 'Database seeded successfully!' });
  } catch (error) {
    console.error('Seeding error:', error);
    return Response.json({ error: 'Failed to seed database' }, { status: 500 });
  }
}
