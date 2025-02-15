import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.tsx";
import { OrdersTable } from "@/components/dashboard/orders-table.tsx";
import styles from "./Orders.module.css";

export default function OrdersPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Orders</h1>

      <Card className={styles.ordersCard}>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <OrdersTable />
        </CardContent>
      </Card>
    </div>
  );
}
