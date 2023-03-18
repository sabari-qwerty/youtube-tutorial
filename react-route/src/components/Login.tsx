import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

export const Login = () => {
    const [ user, setUser ] = useState("")
    const auth = useAuth()
    const navigate = useNavigate()
    const locatin = useLocation()

    const redirectPath = locatin.state?.path || "/ "

    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, { replace: true })
    }
    return (
        <div>
            <label htmlFor="">
                Username: {' '}
                <input type="text" onChange={(e) => setUser(e.target.value)} />
            </label>
            <button onClick={handleLogin} > Login</button>
        </div>
    )
}
