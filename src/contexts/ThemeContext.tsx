import React, {createContext, useState} from 'react';

type CSSType = {
    syntax: string
    bg: string
    ui: string
}

type ThemeContextType = {
    isLightTheme: boolean
    light: CSSType
    dark: CSSType
    toggleTheme: () => void
}

const themeInitialValues: ThemeContextType = {
    isLightTheme: true,
    light: {
        syntax: '#555',
        bg: '#ddd',
        ui: '#eee',
    },
    dark: {
        syntax: '#ddd',
        bg: '#333',
        ui: '#555',
    },
    toggleTheme: () => {}
}

export const ThemeContext = createContext(themeInitialValues)

type ThemeContextProviderProps = {
    children: React.ReactNode,
}

export default function ThemeContextProvider({children}: ThemeContextProviderProps) {
    const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

    const toggleTheme = (): void => setIsLightTheme(!isLightTheme);
    const light = {
        syntax: '#555',
        bg: '#ddd',
        ui: '#eee',
    }
    const dark = {
        syntax: '#ddd',
        bg: '#333',
        ui: '#555',
    }

    return (
        <ThemeContext.Provider value={{light, dark, isLightTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}