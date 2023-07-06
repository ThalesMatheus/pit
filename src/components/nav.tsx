import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import React, { useState } from 'react';
import Modal from '@/components/group'
import DropdownMenuDemo from '@/components/radix/menu'
export default function Navbar () {
    
    return (
    <>
    <nav className='h-[3rem] w-full bg-gray-300'>
    <div className='iternal-navbar flex items-center h-full justify-between w-full'>
    <div className='internal-nav-icons'>
        aaa    
    </div>
        <div className='internal-navbar flex items-center'>
        <div className="internal-nav-item">

        </div>
        <div className="internal-nav-item mr-2">
        <Modal />
        </div>
        <div className="internal-nav-item mr-2">
            <DropdownMenuDemo />
        </div>
        </div>
    </div>   
    </nav>
    </>    
    );
}