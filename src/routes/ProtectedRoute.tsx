import React from 'react'
import { Outlet } from 'react-router-dom'
// import authService from '../services/authService'
import { Role } from '../types/user'

interface ProtectedRouteProps {
  allowedRoles: Role[]
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = () => {
  //({ allowedRoles }) => {
  //   const user = authService.getCurrentUser()
  //   const isAuthenticated = authService.isAuthenticated()

  //   if (!isAuthenticated || !user) {
  //     return <Navigate to='/login' replace />
  //   }

  //   if (!allowedRoles.includes(user.role)) {
  //     return <Navigate to='/' replace />
  //   }

  return <Outlet />
}

export default ProtectedRoute
