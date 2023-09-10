import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

export const onGroupSubmit = async (data: any, handleCloseModal: () => void) => {
  const keys = Object.keys(data)
  console.log(keys)
  console.log(data)

  const requestData = {}

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const value = data[key]
    requestData[key] = value
  }
  const response = await axios.post('http://localhost:8800/creategroup', requestData)

  if (response.data.id === 2) {
    toast.error(response.data.message)
  } else {
    toast.success('group created', { theme: 'dark' })
    handleCloseModal()
  }
}
