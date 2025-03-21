import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const SellerLayout: React.FC = () => {
  return (
    <div className='min-h-screen flex'>
      <h1 className='text-xl font-bold mb-6'>Seller</h1>
      <nav>
        <NavLink
          to='/orders'
          className={({ isActive }) =>
            isActive
              ? 'block text-yellow-300 mb-2'
              : 'block mb-2 hover:text-yellow-300'
          }
        >
          Danh sách đơn hàng
        </NavLink>
        <NavLink
          to='/revenue'
          className={({ isActive }) =>
            isActive
              ? 'block text-yellow-300 mb-2'
              : 'block mb-2 hover:text-yellow-300'
          }
        >
          Danh thu
        </NavLink>
      </nav>
      <main className='flex-1 p-4'>
        <Outlet />
      </main>
    </div>
  )
}

export default SellerLayout
