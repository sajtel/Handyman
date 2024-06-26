import Feed from '@components/Feed'
import styles from '@styles/button.css'
import Image from 'next/image'

const Home = () => {

    return(
 
        <section className= "W-full flex-col">
            <h1 className ="head_text text-center" style ={{color:'WHite', fontSize: '70px'}}>
                HANDYMAN
                <br className="max-md:hidden"/>
                <span className="text-center" style = {{fontSize:'36px', color:'White', paddingTop:'40px'}}> 
                Connecting Neighbourhoods and their Handymen!
                </span> 
            </h1>
            <br />
            <h2 className ="text-center" style={{color:'white', font:'bold', fontSize:'20px', paddingTop:'40px' }}>
            Handyman aims to streamline the process of connecting users with local service professionals across various categories such as home maintenance, wellness, and personal care. We are committed to ensuring high-quality services while fostering trust and convenience in every interaction, ensuring that our customers receive exceptional service experiences with every booking.
            </h2>
            <div className='break'></div>
            
            <div className='sm:flex hidden flex-center flex-between'style={{paddingTop:'40px'}}>
            <button className='outline_btn prompt_layout'>
                <h2 style={{fontSize:'20px', color:'white'}}>FIND A SOLUTION</h2>
                <br></br>
                
            </button>

            <br></br>

            <button className='outline_btn prompt_layout'>
            <h2 style={{fontSize:'20px', color:'white'}}>FIX A PROBLEM</h2>
            <br></br>
            </button>
            </div>


            
        </section>  

    )
}

export default Home