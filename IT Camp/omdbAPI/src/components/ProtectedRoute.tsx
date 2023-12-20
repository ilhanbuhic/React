import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'

interface ProtectedRouterProps {
  children: ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouterProps> = ({ children }) => {
  const { user } = UserAuth()
  if (!user) {
    return <Navigate to='/' />
  } else {
    return <>{children}</>
  }
}

export default ProtectedRoute
