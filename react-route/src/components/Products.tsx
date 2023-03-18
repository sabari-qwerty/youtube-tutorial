import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
export const Products = () => {
    const Nav_Link = ({ isActive }: { isActive: boolean }) => {
        return isActive ? "border-b-current border-b-2 " : ""
    }
    return (
        <>
            <div>
                <input type="search" placeholder='Search products' />
            </div>
            <nav className=' py-2 flex justify-center space-x-4'>

                <NavLink to="featured" className={Nav_Link}>Featured</NavLink>
                <NavLink to="new" className={Nav_Link}>New</NavLink>
            </nav>
            <Outlet />
        </>
    )
}
