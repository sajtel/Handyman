import '@styles/global.css';
import Nav from '@components/Nav'

export const metadata = {
    title: "promptopia",
    description: 'Discover and Share AI prompts'
}

const Rootlayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className='main'>
            <div className= 'gradient'/>
            </div>

            <main className='app'>
              <Nav/>
                {children}
            </main>
        </body>

    </html>
    
  )
}

export default Rootlayout