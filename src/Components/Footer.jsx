import React from 'react'
import Footer2 from '../img/Footer.png'
import  Button  from '@mui/material/Button'
const Footer = () => {
  return (
   <div>
    <img src={Footer2} alt=""  className='w-[100%] z-[-100] absolute b-[0]'/>
    <div className='w-[100%] text-center '>
        <h1 className='text-[40px] text-white w-[500px] pt-[80px] ml-[700px] font-bold'>Sign up & Enroll now,and Get Free Trial For 20Days</h1>
        <div className='flex justify-center items-center pt-[60px]' >
            <Button  variant='contained' style={{background:"#FFFFFF" , color:'black'}} size='large'>Sign up</Button>
            <Button   variant='contained' style={{background:'green',marginLeft:'40px'}} size='large'>Start Free Trial</Button>
        </div>
    </div>
   </div>
  )
}

export default Footer