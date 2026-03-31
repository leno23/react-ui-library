export interface NovaThemeTokens {
  radius: {
    sm: string
    md: string
    lg: string
  }
  color: {
    brand: string
    text: string
    textSecondary: string
    border: string
    bg: string
    bgElevated: string
  }
}

export interface NovaThemeConfig {
  mode: 'light' | 'dark'
  tokens: NovaThemeTokens
}

export const lightTheme: NovaThemeConfig = {
  mode: 'light',
  tokens: {
    radius: {
      sm: '0.5rem',
      md: '0.75rem',
      lg: '1rem',
    },
    color: {
      brand: '#2459ff',
      text: '#0f172a',
      textSecondary: '#475569',
      border: '#dbe4ff',
      bg: '#f8fbff',
      bgElevated: '#ffffff',
    },
  },
}

export const darkTheme: NovaThemeConfig = {
  mode: 'dark',
  tokens: {
    radius: {
      sm: '0.5rem',
      md: '0.75rem',
      lg: '1rem',
    },
    color: {
      brand: '#7ca0ff',
      text: '#f1f5f9',
      textSecondary: '#cbd5e1',
      border: '#334155',
      bg: '#0b1222',
      bgElevated: '#111a30',
    },
  },
}
