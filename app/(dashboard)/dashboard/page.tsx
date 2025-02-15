import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Package, ShoppingCart, Users2, TrendingUp } from "lucide-react";
import { getProducts } from "@/lib/db.ts";
import { OrdersTable } from "app/(dashboard)/orders-table.tsx";
import '../DashboardLayout.module.css';
import '/app/globals.css';

export default async function DashboardPage() {
  const { products } = await getProducts("", 0);
  
  const stats = [
    {
      title: "Total Pet Products",
      value: products.length,
      icon: Package,
      description: "Active pet products in inventory"
    },
    {
      title: "Total Pet Orders",
      value: "25",
      icon: ShoppingCart,
      description: "Orders this month"
    },
    {
      title: "Active Customers",
      value: "120",
      icon: Users2,
      description: "Customers this month"
    },
    {
      title: "Revenue",
      value: "$12,234",
      icon: TrendingUp,
      description: "Revenue this month"
    }
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Products */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Pet Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {products.slice(0, 3).map(product => (
              <div key={product.id} className="flex items-center justify-between border-b py-2 last:border-0">
                <div>
                  <div className="font-medium">{product.name}</div>
                  <div className="text-sm text-muted-foreground">${Number(product.price).toFixed(2)}</div>
                </div>
                <div className={`px-2.5 py-0.5 rounded-full text-xs font-medium capitalize 
                  ${product.status === 'active' ? 'bg-green-100 text-green-800' : 
                    product.status === 'inactive' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'}`}>
                  {product.status}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Pet Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <OrdersTable />
        </CardContent>
      </Card>
    </div>
  );
}
