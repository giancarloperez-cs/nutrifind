import Hero from "../components/Hero"
import BrowseSection from "../components/BrowseSection"
import RecipeCard from "../components/recipeCard"
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import { FaRegHeart, FaNutritionix} from "react-icons/fa";
function HomePage(){
    return(
        <div className="min-h-screen bg-light">
            <Hero/>
            <BrowseSection/>

            {/* FEATURED MEALS */}
            {/* FEATURED MEALS */}
            {/* has cards for meals depending on their popularity, 
            thinking of doing it based on times favorited or something 
            like that, will pull info from database */}

            <section className="py-12">
                <p className="font-heading text-3xl mb-3 justify-start px-4">Featured Meals</p>
                <p className="mx-4 font-body text-sm mb-6">witty line about eating cheap goes here</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <RecipeCard
                    title={"sample"}
                    recipeImage={"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjaXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"}
                    time={"30"}
                    store={"test store"}
                    tags={["test tag", "test tag"]}
                    price={"$10"}
                    />
                    <RecipeCard
                    title={"sample"}
                    recipeImage={"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjaXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"}
                    time={"30"}
                    store={"test store"}
                    tags={["test tag", "test tag"]}
                    price={"$10"}
                    />
                    <RecipeCard
                    title={"sample"}
                    recipeImage={"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjaXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"}
                    time={"30"}
                    store={"test store"}
                    tags={["test tag", "test tag"]}
                    price={"$10"}
                    />
                </div>
                <Link to="/recipes" className="font-heading text-primary-500 text-lg font-semibold text-center mt-12">
                    <p className="mt-6">See all recipes <MdNavigateNext className="inline text-3xl font-bold"/></p>
                </Link>
            </section>

            {/* OUR MISSION SECTION */}
            {/* OUR MISSION SECTION */}
            {/* OUR MISSION SECTION */}

            <section className="py-8 bg-primary-100">
                <div className="mx-4">
                    <Badge
                    icon={<FaRegHeart className=''/>}
                    text={"Our Mission"}
                    variant={"light"}
                    />
                    <p className="font-heading pt-8 text-2xl">
                        What NutriFind Does
                    </p>
                    <p className="font-body pt-2">
                        NutriFind helps people in low-income communities to eat healthy on a budget by connecting them with affordable, nutritious recipes tailored to the stores they already shop. (Walmart, Northgate, El Super, etc…) We believe everyone deserves access to healthy food, regardless of income. By bridging the gap between nutrition and affordability, NutriFind makes healthy eating accessible, practical, and achievable.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default HomePage