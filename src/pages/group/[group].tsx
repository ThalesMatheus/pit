// pages/groups/[group].tsx
import { useRouter } from 'next/router';
import { Description_bar } from '../../components/description';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 20%;
position: relative;
height: 100%;
.sidebar-container {
  -moz-box-shadow: 10px 3px 92px -1px rgba(0,0,0,0.3);
   box-shadow: 10px 3px 92px -1px rgba(0,0,0,0.3);
}
`
function GroupPage() {
  const router = useRouter();
  const { group: groupid } = router.query; 
  const [enable, isEnable] =  useState(false);

  useEffect(() => {
    
    console.log("groupid:", groupid);
  }, [groupid]); 

  return (
    <div className='group-container flex ml-1 flex-row w-[100%] h-[100%]'>
      <div className='chat-container w-[80%]'>

      </div>
      {groupid !== undefined && (
        <Container> 
      
        <button className='btn btn-outline btn-circle z-10 absolute bg-gray-100 max-h-1 cursor-pointer' onClick={() => isEnable(!enable)}> 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button> 
        <div className={`sidebar-container w-[100%] h-[100%] relative ${enable ? 'block': 'none'}`}

>          <Description_bar groupid={groupid} isEnable={enable} />
        </div>
        </Container>
      )}
      {/* Outros conteúdos relacionados ao grupo */}
    </div>
  );
}

export default GroupPage;
