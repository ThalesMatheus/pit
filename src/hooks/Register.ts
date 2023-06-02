import axios from "axios";
import { setCookie } from "nookies";
import { useRouter } from 'next/router';
import { toast } from 'react-toastify'
export const onRegister = async (data) => {
  const keys = Object.keys(data);
  console.log(keys);

  const requestData = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = data[key];
    requestData[key] = value;
  }
  const response = await axios.post("http://localhost:8800/register", requestData);
  if(response.data.id === 2){
    window.location.href = '/login';
  }
  else {
    toast.error("erro ao fazer o cadastro. Tente novamente mais tarde", {theme: "dark"});

  }

};