import axios from 'axios'
import { toast } from 'react-hot-toast'


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
  const requestData = data_map(data);
  const cookies = document.cookie;
  const cookieName = 'user.auth_cookie';
  let cookieValue = '';
  const cookieArray = cookies.split(';');
  for (const element of cookieArray) {
      const cookie = element.trim();
      if (cookie.startsWith(cookieName + '=')) {
        cookieValue = cookie.substring(cookieName.length + 1);
        break;
      }
    }
  requestData['uuid_fake'] = cookieValue
  toast.promise(
    axios.post('http://localhost:8800/creategroup', requestData), {
      loading: 'Creating group... 🕒', // Add a loading message with an emoji
      success: ({ data }) => {
        if (data.id === 2) {
          return toast.error(`Error: ${data.message} ❌`)
        } else {
          handleCloseModal();
          return `Group created! 👍`;
        }
      },
      error: 'An error occurred ❌' + data.message,
    }
  );
};
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

export const onGroupLeave = async (data: any, uuid: any = '') => {

  const response = await axios.post('http://localhost:8800/groups/group_leave', {
    groupid: data,
    uuid: uuid
  })
  if (response.data.id === 2) {
    toast.success('Saiu com sucesso', { theme: 'dark' })
  }
  else if (response.data.id === 3) {
    toast.error('Voce nao esta no grupo', { theme: 'dark' })
  }
  else {
    toast.error(response.data.message, { theme: 'dark' })
  }
}


