import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'
import { FC, ReactNode } from 'react'

interface RequireAuth {
    children: ReactNode

}

export const RequireAuth: FC<RequireAuth> = ({ children }) => {
    const auth = useAuth()
    const location = useLocation()
    if (!auth.user) {
        <Navigate to="/login" state={{ path: location.pathname }} />
    }
    return <div>
        {
            children
        }
    </div>

}
