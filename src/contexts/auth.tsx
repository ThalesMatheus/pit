import { createContext, useEffect, useState } from "react";
import { parseCookies } from 'nookies';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useRouter } from 'next/router';

export const Teste = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    if (cookies) {
      var x = localStorage.getItem('username');
      var y = jwt_decode(cookies["user.auth_cookie"]);
      if (y.id === x) {
        console.log("teste");
        setUser(y); // Set the user in the state if authenticated
      } else {
        router.push('/login'); // Redirect to login page
      }
    }
    setLoading(false); // Set loading to false after authentication check
  }, []);

  if (loading) {
    return null; // Or render a loading spinner or any other component while checking authentication
  }

  if (!user) {
    return null; // Or redirect immediately instead of rendering the protected content
  }

  return (
    <>
      {children} 
      </>
  );
}
