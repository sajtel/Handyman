import '@styles/global.css';
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata ={
  title: "Handyman",
  description: "Connecting neighbourhoods with their Handymen"

}


const Rootlayout = ({children}) => {
   
  
  return (
    
    <html lang="en">
        <body className='background'>
          <Provider>
            <div>
            <div className='cube'/>
            <div className='cube'></div>
            <div className='cube'></div>
            <div className='cube'></div>
            <div className='cube'></div>
            </div>
            <div/>
            <main className='app'>
              <Nav/>
                {children}
            </main>
          </Provider>
        </body>

    </html>
    
  )
}

export default Rootlayout