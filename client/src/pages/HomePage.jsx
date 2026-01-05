import Hello from "../components/Hello"
import Fruits from "../components/Fruits"
import Hero from "../components/Hero"


function HomePage(){
    return(
        <div className="min-h-screen bg-gray-400">
            <Hero />
        </div>
    )
}

export default HomePage