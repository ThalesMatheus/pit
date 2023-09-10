import axios from 'axios'
import { setCookie } from 'nookies'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
export const onForgotpass = async (data) => {
    const keys = Object.keys(data)
    console.log(keys)
  
    const requestData = {}
  
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const value = data[key]
      requestData[key] = value
    }
  const response = await axios.post('http://localhost:8800/forgotpass', requestData)
  toast.success(response.data)
  window.location.href = '/login'
}
