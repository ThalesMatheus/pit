import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Description_bar } from '../../../components/description';


export const sidebar = ({children}: any) => {
    const [describe, setDescribe] = useState(true);
    
    return (
        <>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='container-about w-full mr-[20%]  flex justify-center items-center h-[20rem]'>
            <Description_bar />
        </motion.div>
    
    </>
    )
}