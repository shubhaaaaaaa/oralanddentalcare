'use client'

import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp';


const ChatIcon = () => {
  return (
    //   <div className='fixed bottom-14 right-5 z-10 cursor-pointer hover:scale-110'>
    //       <a href="https://wa.me/9851072626?text=Hello! How can we help?" target='_blank__'>
    //       <Image
    //           src={'/images/icons/whatsapp-color.png'}
    //           alt='Whatsapp chat icon'
    //           height={50}
    //           width={50}
    //           />
    //       </a>
      // </div>
      
      <FloatingWhatsApp
          accountName="Oral and Dental Care"
          statusMessage="Available Now"
          phoneNumber="9851072626"
          avatar='/images/logo-icon.png'
          messageDelay={2}
          notification={true}
          notificationSound={true}
          notificationDelay={5}
    />
  )
}

export default ChatIcon