import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

// if user is allready logged in then it will return true
const useAutheticated = (): boolean => {
  const token = localStorage.getItem('token')

  // if tokens available
  if (token) {
    return true
  }
  return false
}

const AuthenticatedRoute: React.FC = () => {
  const isAutheticated = useAutheticated()

  if (isAutheticated) {
    return <Outlet />
  }
  return <Navigate to='/login' />
}

export default AuthenticatedRoute
