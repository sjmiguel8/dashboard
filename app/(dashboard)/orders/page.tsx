import { OrdersTable } from "../orders-table.tsx";

export default function OrdersPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Orders</h1>
      <OrdersTable />
    </div>
  );
}
