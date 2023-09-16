import * as React from 'react'
import {onGroupEntry} from '../hooks/Group'
import { parseCookies } from 'nookies';
import { GetServerSideProps } from "next";
import axios from 'axios';
export const Confirm_button = ({children, groupid}: any) => {
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
    return (
     <button className='btn h-1! p-1 min-h-[1.5rem] h-[2rem] ml-1 btn-outline btn-success'
     onClick={() => onGroupEntry(groupid, cookieValue)}
     >
        {children}
     </button>
    )
}

