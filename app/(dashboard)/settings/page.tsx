import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";

export default function SettingsPage() {
  const sections = [
    {
      title: "General Settings",
      description: "Basic configuration options for your dashboard",
      items: ["Dashboard Theme", "Language", "Timezone", "Notifications"]
    },
    {
      title: "Account Settings",
      description: "Manage your account preferences and security",
      items: ["Profile Information", "Password & Security", "Connected Accounts", "API Keys"]
    },
    {
      title: "Display Options",
      description: "Customize how information is displayed",
      items: ["Table Views", "Card Layouts", "Data Filters", "Default Views"]
    }
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <div className="grid gap-6">
        {sections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{section.description}</p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                {section.items.map((item) => (
                  <div key={item} className="flex items-center justify-between py-2">
                    <span>{item}</span>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
