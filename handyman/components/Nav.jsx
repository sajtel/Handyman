"use client";

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import {useState,useEffect} from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {

  //add functionality to capture data from user and sign in/sign out
  const { data: session } = useSession();

  const [providers, setProviders]  = useState(null);
  //const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
        const res = await getProviders();
        setProviders(res);
    };
    fetchProviders();
  },[]);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
            <Image
            src="/logo/handyman_logo.jpg" 
            alt="handyman logo"
            width={150}
            height={150}
            className="object-contain"
            />
    {/*desktop navigation */}
    <div className='sm:flex hidden'>
        {session?.user ? (
        <div>
            <button
                className="black_btn"
                type="button"
                //add an onlick
                style={{fontSize:'20px'}}
                >
                    About us
            </button>
            <button
                className="black_btn"
                type="button"
                //add an onlick
                style={{fontSize:'20px'}}
                >
                    Contact
                </button>

            <button 
                className='black_btn'
                type='button'
                onClick={signOut}
                style={{fontSize:'20px'}}
                >
                    Sign Out
            </button>

            <Link href="/Profile">
                <Image
                    src={session?.user.image}
                    width ={37}
                    height = {37}
                    className ="rounded-full"
                />
            </Link>
            </div>

        ) : (
            <>
            {providers && 
            Object.values(providers).map((provider) => (
                <button 
                className='black_btn'
                type='button'
                key = {provider.name}
                onClick={()=> {
                    signIn(provider.id);
                }}
                style={{fontSize:'20px'}}
                >
                    Sign in
                </button>
            ))}
            </>
        )}    
    </div>

    </nav>
    

  );
};

export default Nav;