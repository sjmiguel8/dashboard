import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Settings,
  ShoppingCart,
  Users2
} from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '../components/ui/breadcrumb.tsx';
import { Button } from '../components/ui/button.tsx';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet.tsx';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '../components/ui/tooltip.tsx';
import { Analytics } from '@vercel/analytics/react';
import { User } from '../components/dashboard/user.tsx';
import { VercelLogo } from '../components/icons.tsx';
import Providers from '../components/dashboard/providers.tsx';
import { NavItem } from '../components/dashboard/nav-item.tsx';
import { SearchInput } from '../components/dashboard/search.tsx';
import './globals.css';
import React from 'react';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <main className="flex min-h-screen w-full flex-col bg-gradient-to-br from-white to-gray-50">
            <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-sm border-b shadow-sm transition-all">
              <div className="max-w-[2000px] mx-auto">
                <div className="flex h-16 items-center justify-between px-4 md:px-6">
                  <div className="flex items-center gap-2">
                    <SearchInput />
                    <User />
                  </div>
                </div>
              </div>
            </header>
            <div className="flex-1 p-4 md:p-6 max-w-[2000px] mx-auto w-full">
              <DashboardBreadcrumb />
              <main className="mt-4 grid items-start gap-4 md:gap-6">
                {children}
              </main>
            </div>
            <Analytics />
          </main>
        </Providers>
      </body>
    </html>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="md:hidden hover:bg-accent">
          <PanelLeft className="h-5 w-5 text-muted-foreground" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] p-0">
        <div className="border-b p-4">
          <a
            href="/dashboard"
            className="flex items-center gap-2 font-semibold"
          >
            <VercelLogo className="h-5 w-5" />
            <span>Acme Inc</span>
          </a>
        </div>
        <nav className="grid gap-1 p-2">
          <NavLinks />
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function NavLinks() {
  return (
    <>
      <Button variant="ghost" asChild className="w-full justify-start hover:bg-accent transition-colors">
        <a href="/dashboard" className="flex items-center gap-2 font-medium">
          <Home className="h-4 w-4" />
          Dashboard
        </a>
      </Button>
      <Button variant="ghost" asChild className="w-full justify-start hover:bg-accent transition-colors">
        <a href="/orders" className="flex items-center gap-2 font-medium">
          <ShoppingCart className="h-4 w-4" />
          Pet Orders
        </a>
      </Button>
      <Button variant="ghost" asChild className="w-full justify-start hover:bg-accent transition-colors">
        <a href="/products" className="flex items-center gap-2 font-medium">
          <Package className="h-4 w-4" />
          Pet Products
        </a>
      </Button>
      <Button variant="ghost" asChild className="w-full justify-start hover:bg-accent transition-colors">
        <a href="/customers" className="flex items-center gap-2 font-medium">
          <Users2 className="h-4 w-4" />
          Customers
        </a>
      </Button>
      <Button variant="ghost" asChild className="w-full justify-start hover:bg-accent transition-colors">
        <a href="/analytics" className="flex items-center gap-2 font-medium">
          <LineChart className="h-4 w-4" />
          Analytics
        </a>
      </Button>
      <Button variant="ghost" asChild className="w-full justify-start hover:bg-accent transition-colors">
        <a href="/settings" className="flex items-center gap-2 font-medium">
          <Settings className="h-4 w-4" />
          Settings
        </a>
      </Button>
    </>
  );
}

function DashboardBreadcrumb() {
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <a href="/dashboard">Dashboard</a>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
