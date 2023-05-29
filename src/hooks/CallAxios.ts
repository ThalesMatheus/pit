import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
//type onSubmitType = (creds: any) => Promise<{ redirect: { destination: string; permanent: boolean; }; } | undefined>;
import {setCookie } from "nookies";
import { useRouter } from 'next/router';

export const onSubmit = async ({email, senha})  => {
    /*alert(JSON.stringify(d.email))*/
    const response = await axios
    .post("http://localhost:8800/login", {
    email: JSON.stringify(email).replace(/"/g, ''),
    senha: JSON.stringify(senha).replace(/"/g, ''),
    peido: 1,
  })
  if (response.data.token != undefined){
    toast.success(response.data.message, {theme: "dark"})
    setCookie(undefined, "user.auth_cookie", response.data.token, {
      maxAge: 60 * 60 * 1 //1 hora
    })
    console.log("cheguei")
    window.location.href = '/dashboard';
  }
else{
 toast.error(response.data, {theme: "dark"});
}
}
