import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

export const Navbar: FC = () => {


    const navLink = ({ isActive }: { isActive: boolean }) => {
        return isActive ? ' border-b-2  border-current  ' : ""
    }

    const auth = useAuth()
    return <div className='flex justify-center '>
        <div className='felx space-x-4'>
            <NavLink className={navLink} to="/">Home</NavLink>
            <NavLink className={navLink} to="about">About</NavLink>
            <NavLink className={navLink} to="products">Products</NavLink>
            <NavLink className={navLink} to="users">Users</NavLink>
            <NavLink className={navLink} to="profile">profile</NavLink>
            {
                !auth.user && (
                    <NavLink className={navLink} to="/login">
                        Login
                    </NavLink>
                )
            }
        </div>

    </div>
}