import { GetServerSideProps } from 'next'
import { useState, useEffect, Fragment } from 'react'
import { parseCookies } from 'nookies'
import { jwtcheck } from '@/hooks/VerifyJWT'
import Navigator from '@/components/navigator'
import '@emotion/react'
import axios from 'axios'
import { Auth } from '@/contexts/auth'

export default function Example () {

return (
    <>
      <Auth>
        <Navigator/>
      </Auth>
    </>
  )
}
function sexo () {
  return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'user.auth_cookie': token } = parseCookies(ctx)

  const jwtcheck = async () => {
    try {
      const response = await axios.post('http://localhost:8800/valida', { token })
      const data = response.data
      console.log(data)
      if (data === false) {
        return {
          redirect: {
            destination: '/login',
            permanent: false
          }
        }
      } else {
        return null
      }
    } catch (error) {
      console.error(error)
      // Handle the error appropriately
    }
  }

  const result = await jwtcheck() // Await the jwtcheck function

  return {
    props: {},
    ...result // Spread the result into the return object
  }
}
