import Navbar from "@/components/nav";
// import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Auth } from "@/contexts/auth";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TailwindModal from "@/components/tailwind/modal";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { jwtcheck } from "@/hooks/VerifyJWT";
import { onGroupEntry } from "@/hooks/Group";
import { Confirm_button } from "@/components/button";
import { Confirm_button_leave } from "@/components/buttonLeave";
import { Description_bar } from "@/components/description";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image"
interface Group {
  id: number;
  name: string;
  // Add more properties as needed
}


export const GroupListPage: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [selectedGroupId, setSelectedGroupId] = useState(); // Track the selected group ID
  const [isModalOpen, setIsModalOpen] = useState(false); // State variable to control the visibility of the modal

  const handleOpenModal = (groupId: any) => {
    console.log(groupId);
    setSelectedGroupId(groupId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8800/groups");
        setGroups(response.data);
        console.log(response.data);
        return response.data; // Return the data on success
      } catch (error) {
        throw error; // Throw an error on failure
      }
    };
  
    toast.promise(fetchData(), {
      loading: "Fetching data...",
      error: "Error fetching groups",
      success: "Data fetched successfully!",
    });
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 h-[100%]">
        <h1 className="text-2xl font-bold mb-4">Group List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {groups.map((group) => (
            <div key={group.grupoId} className="bg-white rounded shadow-md p-4">
              <h2 className="text-lg font-semibold mb-2">{group.nome}</h2>
              <p className="text-gray-500">Group ID: {group.grupoId}</p>
              <div className="flex items-center justify-around ">
              <button className="btn h-1! p-1 min-h-[1.5rem] h-[1.75rem] ml-1 btn-outline btn-error"onClick={() => handleOpenModal(group.grupoId)}>
                Deletar
              </button>
              <Confirm_button groupid={group.grupoId}>Confirmar</Confirm_button>
              <Confirm_button_leave groupid={group.grupoId}>
                Sair
              </Confirm_button_leave>
              <Description_bar groupid={group.grupoId} />


              {/* <button onClick={() => onGroupEntry(group.grupoId)}>Participar</button> */}
            </div>
            <Link href="/group/[group].tsx" as={`/group/${group.grupoId}`} className='rounded-md border-1 pt-1 pb-1 pr-1 pl-1 mt-4' style={{border: '1px solid rgba(0,0,0,0.2)'}}>
                {" "}
                Detalhes
              </Link>
              {group.foto ? (
        <Link href={`https://localhost:8800`}>
          <Image src={`http://localhost:8800/uploads/${group.foto}`} width={500} height={500} />
        </Link>
      ) : null}             
            </div>
          ))}
          {isModalOpen && (
            <TailwindModal
              groupId={selectedGroupId}
              closeModal={handleCloseModal}
            />
          )}
        </div>
      </div>
      <Toaster />
      {/* <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT} /> */}
    </>
  );
};

export default GroupListPage;
