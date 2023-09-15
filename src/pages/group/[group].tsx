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
  const [isAnimating, setIsAnimating] = useState(false);

function handleEnableSidebar() {
  setIsEnable(!isEnable);
  setIsAnimating(true);
}

function handleSidebarAnimation() {
  setIsAnimating(false);
}
  useEffect(() => {
    
    console.log("groupid:", groupid);
  }, [groupid]); 

  return (
    <div className='group-container flex flex-row w-[100%] h-[100%]'>
      <div className='chat-container w-[80%]'>

      </div>
      {groupid !== undefined && (
        <Container> 
        <button className='h-[2rem] w-[2rem] absolute z-10 rounded-sm bg-gray-100 cursor-pointer' onClick={() => isEnable(!enable)}> </button> 
        <div className={`sidebar-container w-[100%] h-[100%] relative ${enable ? 'block': 'none'}`}
  style={{
    transform: isAnimating ? `translateX(-100%)` : `translateX(0)`,
  }}
>          <Description_bar groupid={groupid} isEnable={enable} />
        </div>
        </Container>
      )}
      {/* Outros conteúdos relacionados ao grupo */}
    </div>
  );
}

export default GroupPage;
