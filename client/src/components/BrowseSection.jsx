import Card from "./Card"
import { FaDollarSign } from "react-icons/fa"
import { FaFireAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";


export default function BrowseSection() {
    return (
        <div>
            <div className="text-center">
                <p className="font-body text-[20px] font-bold text-dark my-12">
                    Browse by what matters to you
                </p>
                <Card
                icon={<FaDollarSign className="text-primary-600 text-2sm "></FaDollarSign>}
                />
                <Card
                icon={<FaFireAlt className="text-primary-600 text-2sm"></FaFireAlt>}
                />
                <Card
                icon={<FaClock className="text-primary-600 text-2sm"></FaClock>}
                />
                <Card
                icon={<FaCreditCard className="text-primary-600 text-2sm"></FaCreditCard>}
                />
            </div>
        </div>
    )
}