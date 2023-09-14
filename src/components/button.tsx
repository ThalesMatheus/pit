import * as React from 'react'
import {onGroupEntry} from '../hooks/Group'
import { parseCookies } from 'nookies';
import { GetServerSideProps } from "next";
import axios from 'axios';
export const Confirm_button = ({children, groupid}) => {
    const cookies = document.cookie;
    const cookieName = 'user.auth_cookie';
    let cookieValue = '';
    const cookieArray = cookies.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i].trim();
        if (cookie.startsWith(cookieName + '=')) {
          cookieValue = cookie.substring(cookieName.length + 1);
          break;
        }
      }
    return (
     <button
     onClick={() => onGroupEntry(groupid, cookieValue)}
     >
        {children}
     </button>
    )
}
