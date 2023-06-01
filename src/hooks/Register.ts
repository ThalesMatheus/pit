import axios from "axios";
import { setCookie } from "nookies";

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

  return {
    redirect: {
      destination: "/login",
      permanent: false
    }
  };
};