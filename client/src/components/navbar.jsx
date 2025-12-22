import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-green-900 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-2xl font-bold text-white">
                        Home
                    </Link>
                    <div className="flex space-x-8">
                        <Link to="/about" className="text-2xl font-bold text-white">
                        About
                        </Link>
                        <Link to="/recipes" className="text-2xl font-bold text-white">
                        Explore Recipes
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;