"use client"

import { Home, BarChart2, Users, ShoppingCart, Settings } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function AdminSidebar() {
  const pathname = usePathname()

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/admin/dashboard" },
    { icon: BarChart2, label: "Analytics", href: "/admin/analytics" },
    { icon: Users, label: "Users", href: "/admin/users" },
    { icon: ShoppingCart, label: "Orders", href: "/admin/orders" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ]

  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="text-xl font-bold text-joyya-navy">UnBlend Admin</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} passHref>
                <SidebarMenuButton isActive={pathname === item.href} tooltip={item.label}>
                  <item.icon className="mr-2" />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
