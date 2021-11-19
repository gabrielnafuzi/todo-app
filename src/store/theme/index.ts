import { proxy, useSnapshot } from 'valtio'

export const THEME_LOCAL_STORAGE_KEY = '@todoapp/color-scheme'
export type ColorScheme = 'dark' | 'light'

export type ThemeStore = {
  colorScheme: ColorScheme
}

const storageColorScheme = localStorage.getItem(
  THEME_LOCAL_STORAGE_KEY
) as ColorScheme | null

const initialColorScheme: ColorScheme = storageColorScheme ?? 'light'

export const state: ThemeStore = {
  colorScheme: initialColorScheme
}

const store = proxy<ThemeStore>(state)

export const themeActions = {
  toggleColorScheme: () => {
    const newColorScheme = store.colorScheme === 'light' ? 'dark' : 'light'

    store.colorScheme = newColorScheme
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newColorScheme)
  }
}

export const useTheme = () => ({
  colorScheme: useSnapshot(store).colorScheme
})
