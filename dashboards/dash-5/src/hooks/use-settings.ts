"use client";

import type { AppSettings } from "@/types";
import { useEffect, useState } from "react";

const SETTINGS_STORAGE_KEY = "fitness-admin-settings-v1";

const defaultSettings: AppSettings = {
  betaInsights: true,
  smartAlerts: true,
  autoSuspendInactive: false,
  pushNotifications: true,
  emailNotifications: false,
};

export function useSettings() {
  const [settings, setSettings] = useState<AppSettings>(() => {
    if (typeof window === "undefined") {
      return defaultSettings;
    }

    const raw = window.localStorage.getItem(SETTINGS_STORAGE_KEY);

    if (!raw) {
      return defaultSettings;
    }

    try {
      const parsed = JSON.parse(raw) as Partial<AppSettings>;
      return { ...defaultSettings, ...parsed };
    } catch {
      return defaultSettings;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  const updateSetting = <K extends keyof AppSettings>(
    key: K,
    value: AppSettings[K],
  ) => {
    setSettings((current) => ({
      ...current,
      [key]: value,
    }));
  };

  return {
    settings,
    updateSetting,
  };
}
