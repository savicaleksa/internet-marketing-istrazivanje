import { SettingsPanel } from "@/features/settings/settings-panel";

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="font-heading text-2xl font-bold">Settings</h1>
        <p className="text-sm text-muted-foreground">
          Upravljanje funkcijama, dark modom i notifikacionim preferencama.
        </p>
      </div>

      <SettingsPanel />
    </div>
  );
}
