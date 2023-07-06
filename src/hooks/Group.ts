import axios from 'axios';

export const onGroupSubmit = async (data: any) => {
    const keys = Object.keys(data)
    console.log(keys)
    console.log(data)
  
    const requestData = {}
  
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const value = data[key]
      requestData[key] = value
    }
    const response = await axios.post('http://localhost:8800/register', requestData)
   
}