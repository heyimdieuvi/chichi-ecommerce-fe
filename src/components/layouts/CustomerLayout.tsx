import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const CustomerLayout: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-blue-600 text-white p-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Chichi food</h1>
        <nav>
          <NavLink
            to='/products'
            className={({ isActive }) =>
              isActive ? 'text-yellow-300 mr-4' : 'mr-4 hover:text-yellow-300'
            }
          >
            Sản phẩm
          </NavLink>
          <NavLink
            to='/cart'
            className={({ isActive }) =>
              isActive ? 'text-yellow-300 mr-4' : 'mr-4 hover:text-yellow-300'
            }
          >
            Giỏ hàng
          </NavLink>
        </nav>
      </header>
      <main className='flex-1 container mx-auto p-4'>
        <Outlet />
      </main>
    </div>
  )
}

export default CustomerLayout
