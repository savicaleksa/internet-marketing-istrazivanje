"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  enableSystem?: boolean;
  attribute?: "class" | `data-${string}`;
};

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function isThemeValue(value: string | null): value is Theme {
  return value === "light" || value === "dark" || value === "system";
}

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
  enableSystem = true,
  attribute = "class",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return defaultTheme;
    }

    const savedTheme = window.localStorage.getItem(storageKey);
    return isThemeValue(savedTheme) ? savedTheme : defaultTheme;
  });
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      const nextResolvedTheme: ResolvedTheme =
        theme === "system" && enableSystem
          ? getSystemTheme()
          : theme === "dark"
            ? "dark"
            : "light";

      setResolvedTheme(nextResolvedTheme);

      const root = document.documentElement;
      if (attribute === "class") {
        root.classList.remove("light", "dark");
        root.classList.add(nextResolvedTheme);
      } else {
        root.setAttribute(attribute, nextResolvedTheme);
      }
    };

    updateTheme();

    const onSystemThemeChange = () => {
      if (theme === "system" && enableSystem) {
        updateTheme();
      }
    };

    mediaQuery.addEventListener("change", onSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", onSystemThemeChange);
  }, [attribute, enableSystem, theme]);

  const setTheme = useCallback(
    (nextTheme: Theme) => {
      setThemeState(nextTheme);
      window.localStorage.setItem(storageKey, nextTheme);
    },
    [storageKey],
  );

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
    }),
    [theme, resolvedTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
