import { Card } from "../components/Card";
import type { AppSettings } from "../types";

interface ToggleRowProps {
  label: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
}

interface SettingsPageProps {
  settings: AppSettings;
  toggleSetting: (setting: keyof AppSettings) => void;
}

function ToggleRow({ label, description, enabled, onToggle }: ToggleRowProps) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-[var(--border-color)] py-4 last:border-none">
      <div>
        <p className="theme-text-primary font-semibold">{label}</p>
        <p className="theme-text-muted text-sm">{description}</p>
      </div>
      <button
        type="button"
        onClick={onToggle}
        role="switch"
        aria-checked={enabled}
        className={[
          "relative mt-1 inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors",
          enabled ? "bg-[var(--accent)]" : "bg-[var(--interactive-soft)]",
        ].join(" ")}
      >
        <span
          className={[
            "absolute left-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform",
            enabled ? "translate-x-5" : "translate-x-0",
          ].join(" ")}
        />
      </button>
    </div>
  );
}

export function SettingsPage({ settings, toggleSetting }: SettingsPageProps) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold">Settings</h2>
        <p className="theme-text-muted text-sm">
          Control feature toggles, visual preferences, and notification
          defaults.
        </p>
      </div>

      <Card title="General Preferences">
        <ToggleRow
          label="Dark mode"
          description="Enable dark surfaces and reduced glare for late sessions."
          enabled={settings.darkMode}
          onToggle={() => toggleSetting("darkMode")}
        />
        <ToggleRow
          label="Push notifications"
          description="Send instant mobile notifications for workout milestones."
          enabled={settings.pushNotifications}
          onToggle={() => toggleSetting("pushNotifications")}
        />
        <ToggleRow
          label="Weekly reports"
          description="Generate summary analytics every Monday morning."
          enabled={settings.weeklyReports}
          onToggle={() => toggleSetting("weeklyReports")}
        />
        <ToggleRow
          label="Allow trial extensions"
          description="Enable custom trial expansion for selected users."
          enabled={settings.allowTrialExtensions}
          onToggle={() => toggleSetting("allowTrialExtensions")}
        />
      </Card>
    </div>
  );
}
