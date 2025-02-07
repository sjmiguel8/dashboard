import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from '@/components/ui/table.tsx';

type Order = {
  id: number;
  customerName: string;
  product: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  total: string;
  date: string;
};

const sampleOrders: Order[] = [
  {
    id: 1,
    customerName: "John Smith",
    product: "Smartphone X Pro",
    status: "completed",
    total: "$999.00",
    date: "2024-02-07"
  },
  {
    id: 2,
    customerName: "Emma Wilson",
    product: "Wireless Earbuds Ultra",
    status: "processing",
    total: "$199.00",
    date: "2024-02-07"
  },
  {
    id: 3,
    customerName: "Michael Brown",
    product: "Smart Home Hub",
    status: "pending",
    total: "$149.00",
    date: "2024-02-07"
  }
];

export function OrdersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleOrders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>#{order.id}</TableCell>
            <TableCell>{order.customerName}</TableCell>
            <TableCell>{order.product}</TableCell>
            <TableCell>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                ${order.status === 'completed' ? 'bg-green-100 text-green-800' : 
                  order.status === 'processing' ? 'bg-blue-100 text-blue-800' : 
                  order.status === 'cancelled' ? 'bg-red-100 text-red-800' : 
                  'bg-yellow-100 text-yellow-800'}`}>
                {order.status}
              </span>
            </TableCell>
            <TableCell>{order.total}</TableCell>
            <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
