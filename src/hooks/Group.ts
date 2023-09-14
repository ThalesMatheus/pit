import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'


function data_map (data: any) {
  const keys = Object.keys(data)
  console.log(keys)
  console.log(data)

  const requestData = {}

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const value = data[key]
    requestData[key] = value
  }
  return requestData
}

export const onGroupSubmit = async (data: any, handleCloseModal: () => void) => {
  const requestData = data_map(data)
  const response = await axios.post('http://localhost:8800/creategroup', requestData)

  if (response.data.id === 2) {
    toast.error(response.data.message)
  } else {
    toast.success('group created', { theme: 'dark' })
    handleCloseModal()
  }
}

export const onGroupEntry = async (data: any, uuid: any = '') => {

  const response = await axios.post('http://localhost:8800/groups/group_entry', {
    groupid: data,
    uuid: uuid
  })
  if (response.data.id === 2) {
    toast.success('You are in group', { theme: 'dark' })
  }
  else if (response.data.id === 3) {
    toast.error('You already in this group', { theme: 'dark' })
  }
  else {
    toast.error(response.data.message, { theme: 'dark' })
  }
}
