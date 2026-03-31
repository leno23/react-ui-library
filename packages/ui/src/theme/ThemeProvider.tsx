import { createContext, type PropsWithChildren, useContext, useMemo } from 'react'
import { darkTheme, lightTheme, type NovaThemeConfig } from './theme'

interface ThemeContextValue {
  theme: NovaThemeConfig
}

const ThemeContext = createContext<ThemeContextValue>({ theme: lightTheme })

export interface ThemeProviderProps {
  mode?: 'light' | 'dark'
  customTheme?: NovaThemeConfig
}

export function ThemeProvider({ mode = 'light', customTheme, children }: PropsWithChildren<ThemeProviderProps>) {
  const theme = useMemo(() => {
    if (customTheme) {
      return customTheme
    }
    return mode === 'dark' ? darkTheme : lightTheme
  }, [customTheme, mode])

  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
