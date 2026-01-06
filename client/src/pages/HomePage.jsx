import Hello from "../components/Hello"
import Fruits from "../components/Fruits"
import Hero from "../components/Hero"
import BrowseSection from "../components/BrowseSection"


function HomePage(){
    return(
        <div className="min-h-screen bg-light">
            <Hero/>
            <BrowseSection/>
        </div>
    )
}

export default HomePage