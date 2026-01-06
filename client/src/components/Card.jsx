import { FaDollarSign } from "react-icons/fa"

export default function Card({icon, heading, description, onClick}) {
    return(
        <div className="px-4 py-4 bg-white rounded-lg shadow-md flex space-y-4 mx-4 my-4 flex-col items-start">
            <div className="bg-primary-400 p-3 rounded-lg">
                {icon}
            </div>
            <div>
                <p className="font-heading text-[22px] mx-1">{heading}</p>
            </div>
            <div>
                <p className="font-body text-[16px] mx-1 mb-5 text-left pr-12">{description}</p>
            </div>
        </div>
    )
}