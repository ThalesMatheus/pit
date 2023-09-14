import React, { useEffect, useState } from 'react'
import axios from 'axios';
interface user {
    uuid: string
    image_link: any
    name: string
  }
  
export const Description_bar = (groupid) => {

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
        <>
        {user.map(user => (
        <div key={user.uuid}> 
            <div>{user.uuid}</div>
            <div>{user.name}</div>
            <div>{user.image_link}</div>
            </div>
            ))}
            </>
    )
}
