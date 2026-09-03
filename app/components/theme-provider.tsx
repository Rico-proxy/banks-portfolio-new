import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Theme = 'dark' | 'light';

type ThemeProviderValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeProviderContext = createContext<ThemeProviderValue | null>(null);

function getInitialTheme(storageKey: string, fallbackTheme: Theme): Theme {
  if (typeof window === 'undefined') {
    return fallbackTheme;
  }

  const storedTheme = window.localStorage.getItem(storageKey);

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return fallbackTheme;
}

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'banks-theme',
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme(storageKey, defaultTheme));

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('dark', 'light');
    root.classList.add(theme);
    window.localStorage.setItem(storageKey, theme);
  }, [storageKey, theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark')),
    }),
    [theme]
  );

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeProviderContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}
