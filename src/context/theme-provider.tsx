import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  type ReactNode,
} from 'react'

type Theme = 'dark' | 'light' | 'system'
type ResolvedTheme = Exclude<Theme, 'system'>

const STORAGE_KEY = 'admin-ui-theme'
const DEFAULT_THEME: Theme = 'system'

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeProviderState {
  defaultTheme: Theme
  resolvedTheme: ResolvedTheme
  theme: Theme
  setTheme: (theme: Theme) => void
  resetTheme: () => void
}

const initialState: ThemeProviderState = {
  defaultTheme: DEFAULT_THEME,
  resolvedTheme: 'light',
  theme: DEFAULT_THEME,
  setTheme: () => null,
  resetTheme: () => null,
}

const ThemeContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = DEFAULT_THEME,
  storageKey = STORAGE_KEY,
}: ThemeProviderProps) {
  const [theme, _setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  const resolvedTheme = useMemo((): ResolvedTheme => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    return theme as ResolvedTheme
  }, [theme])

  useEffect(() => {
    const root = window.document.documentElement
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const applyTheme = (resolved: ResolvedTheme) => {
      root.classList.remove('light', 'dark')
      root.classList.add(resolved)
    }

    const handleChange = () => {
      if (theme === 'system') {
        applyTheme(mediaQuery.matches ? 'dark' : 'light')
      }
    }

    applyTheme(resolvedTheme)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme, resolvedTheme])

  const setTheme = (t: Theme) => {
    localStorage.setItem(storageKey, t)
    _setTheme(t)
  }

  const resetTheme = () => {
    localStorage.removeItem(storageKey)
    _setTheme(DEFAULT_THEME)
  }

  const contextValue: ThemeProviderState = {
    defaultTheme,
    resolvedTheme,
    theme,
    setTheme,
    resetTheme,
  }

  return (
    <ThemeContext value={contextValue}>
      {children}
    </ThemeContext>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  return context
}
