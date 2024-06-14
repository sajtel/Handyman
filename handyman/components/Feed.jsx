'use client'

//import {useState, useEffect} from 'react'
import PromptCard from './PromptCard'


const PromptCardList = () =>{

    <div className="mt-16 prompt_layout">
        
        <PromptCard/>

    </div>

}

const Feed = () => {
    return(
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input

                    type='text'
                    placeholder = 'search for tag or username'
                />

            </form>

            <PromptCardList/>


        </section>
    )
}

export default Feed