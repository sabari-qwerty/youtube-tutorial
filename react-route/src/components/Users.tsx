import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'
export const Users = () => {

    const [ searchParams, setSearchParmas ] = useSearchParams()

    const showActivesUsers = searchParams.get('filter') === "active"

    const navigate = useNavigate()


    return (
        <div>
            <h2 onClick={() => navigate("1")}>Users 1</h2>
            <h2 onClick={() => navigate("2")}>Users 2</h2>
            <h2 onClick={() => navigate("3")}>Users 3</h2>
            <Outlet />
            <div className='flex justify-center space-x-4'>
                <button onClick={() => setSearchParmas({ filter: 'active' })}>Active Users</button>
                <button onClick={() => setSearchParmas({})}>Reset Filter</button>
            </div>
            {
                showActivesUsers ? <h2>Showing only active users</h2> : <h2>Show all users</h2>
            }
        </div>
    )
}
