import { auth } from "@/lib/auth.ts";
import styles from "./DashboardLayout.module.css";
import { NavItem } from "@/components/dashboard/nav-item.tsx";
import { User } from "@/components/dashboard/user.tsx";
import { SearchInput } from "@/components/dashboard/search.tsx";
import {
  Package,
  ShoppingCart,
  Users2,
  LayoutDashboard,
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    href: "/products",
    icon: Package,
  },
  {
    title: "Orders",
    href: "/orders",
    icon: ShoppingCart,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users2,
  },
];

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className={styles.mainContainer}>
      <nav className={`${styles.desktopNav} ${styles.desktopNavVisible}`}>
        <div className={styles.navHeader}>
          <a href="/dashboard" className={styles.logo}>
            PetShop
          </a>
          <div className={styles.searchContainer}>
            <input type="text" className={styles.searchInput} placeholder="Search..." />
          </div>
        </div>
        <div className={styles.desktopNavItems}>
          {navItems.map((item) => (
            <NavItem key={item.href} href={item.href} label={item.title}>
              <item.icon />
            </NavItem>
          ))}
        </div>
        <div className={styles.desktopNavFooter}>
          {session?.user && <User user={session.user} />}
        </div>
      </nav>

      <main className={styles.mainWrapper}>
        <div className={styles.mainContent}>
          {children}
        </div>
      </main>
    </div>
  );
}
