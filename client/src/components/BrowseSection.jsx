import Card from "./Card"
import { FaDollarSign } from "react-icons/fa"
import { FaFireAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";


export default function BrowseSection() {
    return (
        <div>
            <div className="text-center">
                <p className="font-body text-[20px] font-bold text-dark mb-4 mt-10">
                    Search by Quick Filters
                </p>
                <p className="font-body text-[14px] font-light text-dark mb-10">
                    for more precise filters, head over to the recipe browser
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                    <Card
                    icon={<FaDollarSign className="text-primary-600 text-2sm "></FaDollarSign>}
                    heading="Under $10"
                    description="Complete meals for less than the cost of fast food"
                    imageUrl="/images/under-ten-card-bg.jpg"
                    />
                    <Card
                    icon={<FaFireAlt className="text-primary-600 text-2sm"></FaFireAlt>}
                    heading="No Cooking Required"
                    description="Delicious meals with zero cooking required"
                    imageUrl="/images/no-cooking-card-bg.jpg"
                    />
                    <Card
                    icon={<FaClock className="text-primary-600 text-2sm"></FaClock>}
                    heading="Quick Meals"
                    description="In a rush? Meals ready in under 30 minutes"
                    imageUrl="/images/quick-meals-card-bg.jpg"
                    />
                    <Card
                    icon={<FaCreditCard className="text-primary-600 text-2sm"></FaCreditCard>}
                    heading="EBT Friendly"
                    description="All ingredients are eligible for purchase with EBT"
                    imageUrl="/images/ebt-friendly-card-bg.jpg"
                    />
                </div>
            </div>
        </div>
    )
}