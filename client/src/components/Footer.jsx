import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <>
    <div className='flex flex-row flex-wrap gap-6 m-4'>
    <div>
      <h1 className='font-bold'>GoPlaces.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium corporis dignissimos reprehenderit dolorum, accusamus delectus.</p>
    </div>
    <div>
      <h3 className='font-bold'>QUICK LINKS</h3>
      <ul>
        <li><IoHomeOutline /> Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>

      </ul>
    </div>
    <div>
      <h3  className='font-bold'>Contact Us</h3>
      <ul>
        <li>Phone Number: +977 987654321</li>
        <li>Address: Kathmandu,Nepal</li>
        <li>Email:gopalces@gmail.com</li>
        

      </ul>
    </div>
    <div>
      <h3  className='font-bold'>Social Media</h3>
      <ul>
        <li><CiFacebook /> Facebook</li>
        <li>Address: Kathmandu,Nepal</li>
        <li>Email:gopalces@gmail.com</li>
        

      </ul>
    </div>
    </div>
    <h3 className='font-bold bg-amber-600 p-4'>Copytight 2025. All Rights Reserved</h3>
    </>
  )
}

export default Footer