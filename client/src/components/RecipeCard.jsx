import { FaRegClock, FaStore } from "react-icons/fa"

export default function RecipeCard({recipeImage, title, price, time, store, tags}){
    return(
        <div className="relative rounded-lg px-4 my-4">
            <div className="">
                <img src={recipeImage} alt={title} className="w-full h-48 object-cover rounded-t-lg"/>
            </div>
            <div className="p-4 bg-white rounded-b-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-2xl font-heading">{title}</h2>
                    <span className="text-2xl font-semibold text-primary-500 pr-2">{price}</span>
                </div>
                <div className="flex justify-start items-center mb-2 gap-3">
                    <div className="flex items-center gap-1">
                        <FaRegClock className="text-gray-600"/>
                        <p className="text-gray-600">{time} min</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaStore className="text-gray-600"/>
                        <p className="text-gray-600">{store}</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-primary text-light px-3 py-1 rounded-full text-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}