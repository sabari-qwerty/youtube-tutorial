import { useState, createContext, FC, ReactNode, useContext } from 'react'


interface Auth {
    children: ReactNode
}

interface AuthContext {
    user: string | null | any;
    login: any;
    logout: any;
}
const AuthContext = createContext<AuthContext>({
    user: null,
    login: () => { },
    logout: () => { },
})

export const Auth: FC<Auth> = ({ children }) => {
    const [ user, setUser ] = useState(null)

    const login = (user: any) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    return useContext(AuthContext)
}