

import { deleteProductById, insertProduct, updateProductById } from "@/lib/db.ts";
import { z } from "zod";

const productSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  imageUrl: z.string(),
  status: z.enum(['active', 'inactive', 'archived']),
  price: z.string(),
  stock: z.number(),
  availableAt: z.date()
});
import { revalidatePath } from "next/cache.js";


export async function deleteProduct(formData: FormData) {
  try {
    let id = Number(formData.get('id'));
    if (isNaN(id)) {
      throw new Error('Invalid product ID');
    }
    await deleteProductById(id);
    revalidatePath('/');
  } catch (error) {
    console.error('Failed to delete product:', error);
  }
}

export async function updateProduct(formData: FormData) {
  try {
    let id = Number(formData.get('id'));
    if (isNaN(id)) {
      throw new Error('Invalid product ID');
    }
    const productData = productSchema.parse({
      id: formData.get('id') ? Number(formData.get('id')) : undefined,
      imageUrl: formData.get('imageUrl'),
      name: formData.get('name'),
      price: formData.get('price'),
      stock: formData.get('stock'),
      status: formData.get('status'),
      availableAt: new Date()
    });

    await updateProductById(id, {
      name: formData.get('name') as string,
      price: formData.get('price') as string,
      status: formData.get('status') as 'active' | 'inactive' | 'archived'
    });

    await insertProduct({
      imageUrl: formData.get('imageUrl') as string,
      name: formData.get('name') as string,
      price: formData.get('price') as string,
      stock: Number(formData.get('stock')),
      status: formData.get('status') as 'active' | 'inactive' | 'archived',
      availableAt: new Date(),
      id: 0
    });
    revalidatePath('/');
  } catch (error) {
    console.error('Failed to update product:', error);
  }
}

export async function createProduct(formData: FormData) {
  try {
    await insertProduct({
      imageUrl: formData.get('imageUrl') as string,
      name: formData.get('name') as string,
      price: Number(formData.get('price')),
      stock: Number(formData.get('stock')),
      status: formData.get('status') as 'active' | 'inactive' | 'archived',
      availableAt: new Date()
    });
    revalidatePath('/');
  } catch (error) {
    console.error('Failed to create product:', error);
  }
}

