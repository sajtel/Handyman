import Feed from '@components/Feed'

const Home = () => {

    return(

        <section className= "W-full flex-center flex-col">
            <h1 className ="head_text text-center orange_gradient">
                Handyman
                <br className="max-md:hidden"/>
                <span className="blue_gradient text-center"> One stop handy shop</span> 
            </h1>
            <p className ="desc text-center">
                Looking for a quick tweak or complete fix? Our handymen are the experts you seek!
            </p>

            <Feed/>
            
        </section>            

    )
}

export default Home