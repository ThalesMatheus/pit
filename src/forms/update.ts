import axios, { AxiosRequestConfig } from 'axios'

import { setCookie } from 'nookies'
import { v4 as uuidv4 } from 'uuid'
import FormData from 'form-data'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { toast, ToastContainer } from 'react-toastify'

export const updateData = async (data) => {
  if (data.username === 'admin') {
    toast.warn('Em manuntenção! Aguarde...', { theme: 'dark' })
  } else {
    try {
      const formData = new FormData()
      formData.append('photo', data.photo[0])
      console.log(data.photo[0])
      const temp = localStorage.getItem('username')
      formData.append('uuid', temp)
      const response = await axios.post('http://localhost:8800/update', formData)
      console.log(response.data)
      if (response.data === 'Perfil atualizado') {
        toast.success(response.data, { theme: 'dark' })
      } else {
        toast.error(response.data, { theme: 'dark' })
      }
    } catch {
      const x = 'Algo deu errado'
      toast.error(x, { theme: 'dark' })
    }
  };
}
