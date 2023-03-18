import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
// import { About } from './components/About'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { OrderSummary } from './components/OrderSummary'
import { NoMatch } from './components/NoMatch'
import { Products } from './components/Products'
import { NewProducts } from './components/NewProducts'
import { FeaturedProducts } from './components/FeaturedProducts'
import { Users } from './components/Users'
import { UserDetails } from './components/UserDetails'
import { Admin } from './components/Admin'
import { Profile } from './components/Profile'
const LazyAbout = lazy(() => import('./components/About'))

import { Auth } from './components/Auth'
import { Login } from './components/Login'
import { RequireAuth } from './components/RequireAuth'

function App() {

  return (
    <Auth>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={
          <Suspense fallback="Loading....">
            <LazyAbout />
          </Suspense>
        }
        />
        <Route path='/order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />} >
          <Route index element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
        </Route>
        <Route path='users' element={<Users />} >
          <Route path='admin' element={<Admin />} />
          <Route path=':userId' element={<UserDetails />} />
        </Route>
        <Route path='/profile' element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        } />
        <Route path="login" element={<Login />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </Auth>
  )
}

export default App
