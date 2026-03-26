import { useEffect, useState } from "react";
import { defaultSettings } from "../features/data/mockData";
import type { AppSettings } from "../types";

const SETTINGS_STORAGE_KEY = "fit-admin-settings";

function getInitialSettings(): AppSettings {
  if (typeof window === "undefined") {
    return defaultSettings;
  }

  const persisted = window.localStorage.getItem(SETTINGS_STORAGE_KEY);
  if (!persisted) {
    return defaultSettings;
  }

  try {
    const parsed = JSON.parse(persisted) as Partial<AppSettings>;
    return { ...defaultSettings, ...parsed };
  } catch {
    return defaultSettings;
  }
}

export function useSettings() {
  const [settings, setSettings] = useState<AppSettings>(getInitialSettings);

  function toggleSetting(setting: keyof AppSettings) {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }));
  }

  useEffect(() => {
    window.localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  return { settings, toggleSetting };
}
