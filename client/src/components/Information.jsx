import React from 'react'
import { GrUserExpert } from "react-icons/gr";
import { CiGlobe } from "react-icons/ci";
import { FaRegMap } from "react-icons/fa6";
import { LuDraftingCompass } from "react-icons/lu";
const Information = () => {
  return (
    <>
     <div className='flex flex-wrap gap-4 m-5'>
      <div className=' bg-white shadow-lg rounded-xl p-5'>
       <GrUserExpert   size={40} color="green" />
        <h3>Expert Support</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, similique?</p>
      </div>
      <div className=' bg-white shadow-lg rounded-xl p-5'>
      <CiGlobe  size={40} color="green"  />
        <h3>Premium Locationst</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, similique?</p>
      </div>
      <div className=' bg-white shadow-lg rounded-xl p-5'>
      <FaRegMap  size={40} color="green" />
        <h3>Guide</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, similique?</p>
      </div>
      <div className=' bg-white shadow-lg rounded-xl p-5'>
      <LuDraftingCompass  size={40} color="green"  />
        <h3>Expert Support</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, similique?</p>
      </div>
     </div>
    </>
   
  )
}

export default Information