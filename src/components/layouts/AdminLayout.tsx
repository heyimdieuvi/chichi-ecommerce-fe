import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const AdminLayout: React.FC = () => {
  return (
    <div className='min-h-screen flex'>
      <h1 className='text-xl font-bold mb-6'>Admin</h1>
      <nav>
        <NavLink
          to='/dashboard'
          className={({ isActive }) =>
            isActive
              ? 'block text-yellow-300 mb-2'
              : 'block mb-2 hover:text-yellow-300'
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to='/manage-users'
          className={({ isActive }) =>
            isActive
              ? 'block text-yellow-300 mb-2'
              : 'block mb-2 hover:text-yellow-300'
          }
        >
          Quản lý người dùng
        </NavLink>
      </nav>
      <main className='flex-1 p-4'>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
