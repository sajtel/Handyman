'use client'

import {useState} from "react";
import Image from 'next/image';
//import {useSession} from "next-auth/react";
//import {usePathname, UseRouter} from "next-navigation"


const PromptCard = () => {
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex jutstify-start items-center gap-3 cursor-pointer">
            

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              username
            </h3>
            <p className="font-inter text-sm text-">
              email
            </p>
          </div>
        </div>       

      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700"></p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
      >
        #post tag
      </p>


        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            
          >

            Edit
          </p>

          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
          >
            
            Delete
          </p>
        </div>
      </div>


}

export default PromptCard