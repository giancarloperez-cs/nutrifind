import { Link } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="bg-light shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 text-dark font-heading">
                    <Link to="/" className="text-3xl font-semibold">
                        NutriFind
                    </Link>
                    <div className="flex space-x-6 text-lg">
                        <button className="bg-primary text-light px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-primary-600 transition-colors">
                            <FaSearch className="text-xl"></FaSearch>
                        </button>
                        <button className="bg-primary text-light px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-primary-600 transition-colors">
                            <FaBars className="text-xl"></FaBars>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;