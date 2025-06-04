import React, {createContext, useState} from 'react';

type AuthContextType = {
    isAuthenticated: boolean,
    toggleAuth: () => void
}

const authInitialValues: AuthContextType = {
    isAuthenticated: false,
    toggleAuth: (): void => {}
}

export const AuthContext = createContext(authInitialValues);

type AuthContextProviderProps = {
    children: React.ReactNode
}

export default function AuthContextProvider({children}: AuthContextProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const toggleAuth = (): void => setIsAuthenticated(!isAuthenticated);

    return (
        <AuthContext.Provider value={{isAuthenticated, toggleAuth}}>
            {children}
        </AuthContext.Provider>
    )
}