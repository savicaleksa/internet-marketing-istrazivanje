"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  CreditCard,
  Dumbbell,
  Menu,
  Settings2,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface DashboardShellProps {
  children: React.ReactNode;
}

const navLinks = [
  { href: "/overview", label: "Overview", icon: BarChart3 },
  { href: "/users", label: "Users", icon: Users },
  { href: "/workouts", label: "Workouts", icon: Dumbbell },
  {
    href: "/subscription-plans",
    label: "Subscription plans",
    icon: CreditCard,
  },
  { href: "/settings", label: "Settings", icon: Settings2 },
];

function NavItems({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <nav className="space-y-1">
      {navLinks.map((item) => {
        const active = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <Icon className="size-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function DashboardShell({ children }: DashboardShellProps) {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-[radial-gradient(circle_at_20%_0%,oklch(0.94_0.02_75),transparent_35%),radial-gradient(circle_at_80%_0%,oklch(0.92_0.03_205),transparent_30%)] dark:bg-[radial-gradient(circle_at_20%_0%,oklch(0.2_0.02_75),transparent_35%),radial-gradient(circle_at_80%_0%,oklch(0.23_0.03_205),transparent_30%)]">
      <div className="mx-auto flex w-full max-w-7xl gap-6 px-4 py-4 md:px-6">
        <aside className="sticky top-4 hidden h-[calc(100dvh-2rem)] w-64 rounded-2xl border border-border/60 bg-card/70 p-4 backdrop-blur md:block">
          <div className="mb-8">
            <p className="font-heading text-xl font-bold">PulseBoard</p>
            <p className="text-xs text-muted-foreground">
              Fitness tracking admin
            </p>
          </div>
          <NavItems pathname={pathname} />
        </aside>

        <div className="w-full">
          <header className="mb-4 flex items-center justify-between rounded-2xl border border-border/60 bg-card/70 px-3 py-3 backdrop-blur md:px-4">
            <div className="flex items-center gap-2 md:hidden">
              <Dialog open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
                <DialogTrigger
                  render={
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="Otvori navigaciju"
                    />
                  }
                >
                  <Menu className="size-4" />
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm">
                  <DialogHeader>
                    <DialogTitle>Navigacija</DialogTitle>
                  </DialogHeader>
                  <NavItems
                    pathname={pathname}
                    onNavigate={() => setMobileNavOpen(false)}
                  />
                </DialogContent>
              </Dialog>
              <div>
                <p className="font-heading text-sm font-bold">PulseBoard</p>
                <p className="text-xs text-muted-foreground">Admin panel</p>
              </div>
            </div>
            <div className="hidden md:block">
              <p className="font-heading text-sm font-semibold text-muted-foreground">
                Fitness Tracking Platform
              </p>
            </div>
            <ThemeToggle />
          </header>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
