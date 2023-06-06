import { createContext, useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/router'

interface AuthValue {
  children: any
}
export const Auth = ({ children }: AuthValue) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const cookies = parseCookies()
    if (cookies) {
      const x = localStorage.getItem('username')
      const y = jwt_decode(cookies['user.auth_cookie'])
      if (y.id === x) {
        console.log('teste')
        setUser(y)
      } else {
        router.push('/login')
      }
    }
    setLoading(false)
  }, [])

  if (loading) {
    return null
  }

  if (!user) {
    return null
  }

  return (
    <>
      {children}
    </>
  )
}
