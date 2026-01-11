import { FaDollarSign } from "react-icons/fa"

export default function Card({icon, heading, description, onClick, imageUrl}) {
    return(
        <div className="relative rounded-lg shadow-md mx-4 my-4 bg-cover bg-center" style={{backgroundImage: `url(${imageUrl})`}}>
            {/* Semi-transparent white overlay */}
            <div className="absolute inset-0 bg-white opacity-70 rounded-lg"></div>
            
            {/* Content on top */}
            <div className="relative z-10 px-4 py-4 flex flex-col items-start space-y-4">
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
        </div>
    )
}