"use client";

import { useTheme } from "@/components/theme-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useSettings } from "@/hooks/use-settings";

export function SettingsPanel() {
  const { resolvedTheme, setTheme } = useTheme();
  const { settings, updateSetting } = useSettings();

  const isDark = resolvedTheme === "dark";

  return (
    <Card className="border-border/60 bg-card/80">
      <CardHeader>
        <CardTitle>Application settings</CardTitle>
        <CardDescription>
          Kontrola funkcija, tema i notifikacija.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between rounded-xl border border-border/70 p-3">
          <div>
            <Label htmlFor="dark-mode" className="font-medium">
              Dark mode
            </Label>
            <p className="text-xs text-muted-foreground">
              Globalna tema sačuvana nakon reload-a.
            </p>
          </div>
          <Switch
            id="dark-mode"
            checked={isDark}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            aria-label="Promena dark moda"
          />
        </div>

        <Separator />

        <div className="space-y-3">
          <p className="text-sm font-semibold">Feature toggles</p>

          <div className="flex items-center justify-between rounded-xl border border-border/70 p-3">
            <Label htmlFor="beta-insights">Beta insights</Label>
            <Switch
              id="beta-insights"
              checked={settings.betaInsights}
              onCheckedChange={(checked) =>
                updateSetting("betaInsights", checked)
              }
            />
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border/70 p-3">
            <Label htmlFor="smart-alerts">Smart alerts</Label>
            <Switch
              id="smart-alerts"
              checked={settings.smartAlerts}
              onCheckedChange={(checked) =>
                updateSetting("smartAlerts", checked)
              }
            />
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border/70 p-3">
            <Label htmlFor="auto-suspend">Auto suspend inactive users</Label>
            <Switch
              id="auto-suspend"
              checked={settings.autoSuspendInactive}
              onCheckedChange={(checked) =>
                updateSetting("autoSuspendInactive", checked)
              }
            />
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <p className="text-sm font-semibold">Notification preferences</p>

          <div className="flex items-center justify-between rounded-xl border border-border/70 p-3">
            <Label htmlFor="push">Push notifications</Label>
            <Switch
              id="push"
              checked={settings.pushNotifications}
              onCheckedChange={(checked) =>
                updateSetting("pushNotifications", checked)
              }
            />
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border/70 p-3">
            <Label htmlFor="email">Email notifications</Label>
            <Switch
              id="email"
              checked={settings.emailNotifications}
              onCheckedChange={(checked) =>
                updateSetting("emailNotifications", checked)
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
