import { SidebarProvider } from "@/components/ui/sidebar"
import { AdminSidebar } from "@/components/ui/AdminSidebar"
import { Dashboard } from "@/components/ui/Dashboard"

export default function AdminDashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gradient-to-br from-joyya-blue/20 via-white to-joyya-blue/20">
        <AdminSidebar />
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-joyya-navy mb-8">Admin Dashboard</h1>
          <Dashboard />
        </div>
      </div>
    </SidebarProvider>
  )
}

