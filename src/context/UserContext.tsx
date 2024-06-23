import { createContext, useContext, useEffect, useState } from 'react'

type User = {
    email: string
    nombre: string
    apellido: string
    id: string
    token: string
}

interface UserContextType {
    user: User  | null  
    setUser: (user: User) => void
    logOut: () => void
}

const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
    logOut: () => {},
})

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)

    // TODO: Implementar el obtener el usuario  desde el local storage

    const changeUser = (user: User) => {
        setUser(user)
    }

    const logOut = async () => {
        setUser(null)
    }

    return (
        <UserContext.Provider value={{ user, setUser: changeUser, logOut }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUserContext must be used within a UserContextProvider')
    }
    return context
}