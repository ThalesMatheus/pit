import Navbar from '@/components/nav'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Auth } from '@/contexts/auth'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TailwindModal from '@/components/tailwind/modal'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { jwtcheck } from '@/hooks/VerifyJWT'
import { onGroupEntry } from '@/hooks/Group'
import { Confirm_button } from '@/components/button'
import { Description_bar } from '@/components/description'
interface Group {
  id: number
  name: string
  // Add more properties as needed
}

export const GroupListPage: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([])
  const [selectedGroupId, setSelectedGroupId] = useState() // Track the selected group ID
  const [isModalOpen, setIsModalOpen] = useState(false) // State variable to control the visibility of the modal

  const handleOpenModal = (groupId: any) => {
    console.log(groupId)
    setSelectedGroupId(groupId)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    axios.get('http://localhost:8800/groups')
      .then(response => {
        setGroups(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.log('Error fetching groups:', error)
      })
  }, [])
  return (
    <>
      <Navbar />
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-2xl font-bold mb-4'>Group List</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {groups.map(group => (
            <div
              key={group.grupoId}
              className='bg-white rounded shadow-md p-4'
            >
              <h2 className='text-lg font-semibold mb-2'>{group.nome}</h2>
              <p className='text-gray-500'>Group ID: {group.grupoId}</p>
              <button onClick={() => handleOpenModal(group.grupoId)}>Deletar</button>
            <Confirm_button groupid={group.grupoId}>Confirmar</Confirm_button>
            <Description_bar groupid={group.grupoId} />
              {/* <button onClick={() => onGroupEntry(group.grupoId)}>Participar</button> */}
            </div>
          ))}
          {isModalOpen && (
            <TailwindModal groupId={selectedGroupId} closeModal={handleCloseModal} />
          )}
        </div>
      </div>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT} />

    </>
  )
}

export default GroupListPage
