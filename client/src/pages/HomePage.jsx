import Hero from "../components/Hero"
import BrowseSection from "../components/BrowseSection"
import RecipeCard from "../components/recipeCard"
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";

function HomePage(){
    return(
        <div className="min-h-screen bg-light">
            <Hero/>
            <BrowseSection/>
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
            <section className="py-12 bg-primary-100">
                <Badge/>
            </section>
        </div>
    )
}

export default HomePage