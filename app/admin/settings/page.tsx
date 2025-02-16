"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { BarChart2, Settings, PieChart } from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: BarChart2, href: "/admin/dashboard" },
  { name: "Analytics", icon: PieChart, href: "/admin/analytics" },
  { name: "Settings", icon: Settings, href: "/admin/settings" },
];

export default function AdminSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [dataRetentionDays, setDataRetentionDays] = useState(30);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would save these settings to a backend
    alert("Settings saved!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-unblend-blue/20 via-white to-unblend-blue/20">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-unblend-navy mb-8">
          Admin Settings
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 space-y-2">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button variant="outline" className="w-full justify-start">
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            ))}
            <Link href="/">
              <Button variant="outline" className="w-full justify-start">
                Back to Site
              </Button>
            </Link>
          </aside>
          <main className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle>Admin Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSave} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-notifications">
                      Email Notifications
                    </Label>
                    <Switch
                      id="email-notifications"
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="data-retention">
                      Data Retention (days)
                    </Label>
                    <Input
                      id="data-retention"
                      type="number"
                      value={dataRetentionDays}
                      onChange={(e) =>
                        setDataRetentionDays(Number.parseInt(e.target.value))
                      }
                      min={1}
                      max={365}
                    />
                  </div>
                  <Button type="submit">Save Settings</Button>
                </form>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
