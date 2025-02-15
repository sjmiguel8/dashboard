import { Card } from "@/components/ui/card.tsx";
import { getProducts } from "@/lib/db.ts";
import styles from "./Products.module.css";

interface Product {
  id: number;
  imageUrl: string;
  name: string;
  status: "active" | "inactive" | "archived";
  price: string;
  stock: number;
  availableAt: Date;
}

export default async function ProductsPage() {
  const { products } = await getProducts("", 0);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Products</h1>
        <button className={styles.addButton}>Add Product</button>
      </div>

      <div className={styles.productsGrid}>
        {products.map((product) => (
          <Card key={product.id} className={styles.productCard}>
            <div className={styles.productImageWrapper}>
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className={styles.productImage}
              />
              <div className={`${styles.productStatus} ${styles[product.status]}`}>
                {product.status}
              </div>
            </div>
            <div className={styles.productContent}>
              <h3 className={styles.productName}>{product.name}</h3>
              <div className={styles.productDetails}>
                <span className={styles.productPrice}>{product.price}</span>
                <span className={styles.productStock}>
                  In Stock: {product.stock}
                </span>
              </div>
              <div className={styles.productActions}>
                <span className={styles.productDate}>
                  Added {new Date(product.availableAt).toLocaleDateString()}
                </span>
                <button className={styles.editButton}>Edit</button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
