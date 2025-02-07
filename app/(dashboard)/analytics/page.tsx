import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import React from "react";

export default function AnalyticsPage() {
  const stats = [
    { title: "Total Sales", value: "$12,345" },
    { title: "Active Products", value: "150" },
    { title: "Customer Growth", value: "+25%" },
    { title: "Average Order Value", value: "$199" }
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
