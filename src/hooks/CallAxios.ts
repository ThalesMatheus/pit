import {AxiosRequestConfig} from "axios";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
//type onSubmitType = (creds: any) => Promise<{ redirect: { destination: string; permanent: boolean; }; } | undefined>;
import {setCookie } from "nookies";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { useRouter } from 'next/router';

export const onSubmit = async ({email, senha, peido})  => {
    /*alert(JSON.stringify(d.email))*/
    
    const response = await axios
    .post("http://localhost:8800/login", {
    email: JSON.stringify(email).replace(/"/g, ''),
    senha: JSON.stringify(senha).replace(/"/g, ''),
    peido: 1,
  })
  if (response.data.token != undefined){
    toast.success(response.data.message, {theme: "dark"})
    const x = await axios.post("http://localhost:8800/auth_check", {
      email: JSON.stringify(email).replace(/"/g, ''),
    })
    console.log(x.data)
    console.log("sexo")
    localStorage.setItem('username', x.data);
    setCookie(undefined, "user.auth_cookie", response.data.token, {
      path: '/',        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 1 // 1 hour 
    })
    window.location.href = '/dashboard';
  }
else{
 toast.error(response.data, {theme: "dark"});
}

}