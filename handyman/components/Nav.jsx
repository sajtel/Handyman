
"use client"
import React from 'react';
//import Link from 'next/Link';
import Image from "next/image";
import {useState,useEffect} from 'react';
import {SignIn, SignOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Image src="/logo/handyman_logo.jpg" 
        alt="handyman logo"
        width={130}
        height={130}
        className="object-contain"/>
    </nav>
  )
}

export default Nav