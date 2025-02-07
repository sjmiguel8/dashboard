import { SelectProduct } from '../../lib/db.ts';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from '../ui/table.tsx';

export function ProductsTable({
  products,
  offset,
  totalProducts
}: {
  products: SelectProduct[];
  offset: number;
  totalProducts: number;
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Available At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.status}</TableCell>
            <TableCell>${Number(product.price).toFixed(2)}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>{new Date(product.availableAt).toLocaleDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
