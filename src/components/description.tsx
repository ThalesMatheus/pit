import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { motion } from 'framer-motion';
interface user {
    uuid: string
    foto: any
    nome: string
  }
  interface description_interface {
    groupid: string,
    isEnable: boolean
  }
export const Description_bar = ({groupid, isEnable}: description_interface) => {
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA => " + groupid + " AAAAAAAAAAAAAAAAAAAAAAAA")
    const [user, setUser] = useState<user[]>([]);
    useEffect(() => {
        axios.post('http://localhost:8800/groups/current_users', {
            groupid: groupid
        })
          .then(response => {
            setUser(response.data)
            console.log(response)
          })
          .catch(error => {
            console.log('Error fetching groups:', error)
          })
      }, [])
    return (

        <motion.div className={isEnable ? 'block' : 'hidden' }
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        > 
        {user.map(user => (
        <div key={user.uuid} className='flex flex-row items-center justify-around w-[100%]'> 
              <div>{user.nome}</div>
              <div>{user.foto}</div>
            </div>
            ))}
      </motion.div>
    )
}
