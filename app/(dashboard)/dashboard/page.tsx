import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Package, ShoppingCart, Users2, TrendingUp } from "lucide-react";
import { getProducts } from "@/lib/db.ts";
import styles from "./Dashboard.module.css";

export default async function DashboardPage() {
  const { products } = await getProducts("", 0);
  
  const stats = [
    {
      title: "Total Products",
      value: products.length,
      icon: Package,
      description: "Active products in inventory",
      color: "purple"
    },
    {
      title: "Orders",
      value: "25",
      icon: ShoppingCart,
      description: "Orders this month",
      color: "blue"
    },
    {
      title: "Customers",
      value: "120",
      icon: Users2,
      description: "Active customers",
      color: "green"
    },
    {
      title: "Revenue",
      value: "$12,234",
      icon: TrendingUp,
      description: "Revenue this month",
      color: "orange"
    }
  ];

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.pageTitle}>Dashboard Overview</h1>
      
      <div className={styles.statsGrid}>
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className={styles.statCard}>
              <CardHeader className={styles.statHeader}>
                <div className={`${styles.statIconWrapper} ${styles[stat.color]}`}>
                  <Icon className={styles.statIcon} />
                </div>
                <CardTitle className={styles.statTitle}>{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={styles.statValue}>{stat.value}</div>
                <p className={styles.statDescription}>{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className={styles.contentGrid}>
        <Card className={styles.recentProducts}>
          <CardHeader>
            <CardTitle>Recent Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={styles.productsList}>
              {products.slice(0, 5).map((product) => (
                <div key={product.id} className={styles.productItem}>
                  <div className={styles.productInfo}>
                    <div className={styles.productName}>{product.name}</div>
                    <div className={styles.productPrice}>{product.price}</div>
                  </div>
                  <div className={`${styles.productStatus} ${styles[product.status]}`}>
                    {product.status}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
