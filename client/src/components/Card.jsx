import { FaDollarSign } from "react-icons/fa"

export default function Card({icon, heading, description, onClick}) {
    return(
        <div className="px-4 py-4 bg-white rounded-lg shadow-md flex items-center space-x-4 mx-4 my-4">
            <div className="bg-primary-400 p-3 rounded-lg inline-block">
                {icon}
            </div>
        </div>
    )
}