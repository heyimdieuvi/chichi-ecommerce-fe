import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../pages/Admin/Dashboard'
import ManageUsers from '../pages/Admin/ManageUsers'
import { Role } from '../types/user'
import Login from '../pages/Login'
import ProtectedRoute from './ProtectedRoute'
import CustomerLayout from '../components/layouts/CustomerLayout'
import Products from '../pages/Customer/Products'
import Cart from '../pages/Customer/Cart'
import SellerLayout from '../components/layouts/SellerLayout'
import Orders from '../pages/Seller/Orders'
import Revenue from '../pages/Seller/Revenue'
import AdminLayout from '../components/layouts/AdminLayout'

const publicRoutes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Login />,
  },
]

const privateRoutes = [
  {
    path: '/',
    element: <ProtectedRoute allowedRoles={[Role.CUSTOMER]} />,
    children: [
      {
        element: <CustomerLayout />,
        children: [
          {
            path: '/products',
            element: <Products />,
          },
          {
            path: '/cart',
            element: <Cart />,
          },
        ],
      },
    ],
  },
  {
    path: '/',
    element: <ProtectedRoute allowedRoles={[Role.SELLER]} />,
    children: [
      {
        element: <SellerLayout />,
        children: [
          {
            path: '/orders',
            element: <Orders />,
          },
          {
            path: '/revenue',
            element: <Revenue />,
          },
        ],
      },
    ],
  },
  {
    path: '/',
    element: <ProtectedRoute allowedRoles={[Role.ADMIN]} />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard />,
          },
          {
            path: '/manage-users',
            element: <ManageUsers />,
          },
        ],
      },
    ],
  },
]

const router = createBrowserRouter([...publicRoutes, ...privateRoutes])

export default router
