import Pill from "./Pill";
import Button from "./Button";

export default function Hero(){
    return(
        <div className="h-[70vh] relative bg-cover bg-center" style={{backgroundImage: "url('/images/hero-bg.jpg')"}}>
            {/* Overlay - just a colored transparent layer */}
            <div className="absolute inset-0 bg-primary opacity-93"></div>
            
            {/* Content wrapper - makes content appear above overlay */}
            <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-col items-center pt-10 px-4">
                    <h1 className="text-3xl font-bold font-heading text-light mb-5 text-center">Welcome to NutriFind</h1>
                </div>
                <div className="flex mx-4">
                    <Pill text="New recipes added weekly"/>
                </div>
                <div className="flex flex-col items-start px-4 mt-5">
                    <p className="text-[20px] text-light font-heading font-bold pb-4">Healthy Meals that fit your budget</p>
                    <p className="text-[16px] text-light font-body ">Find affordable, nutritious recipes using ingredients from stores you already shop at. Real food, real prices, real simple.</p>
                </div>
                <div className="flex flex-col items-center mt-10 px-4 space-y-4">
                    <Button text="Find Meals" variant="light" className="w-9/10"/>
                    <Button text="How It Works" variant="outline" className="w-9/10"/>                
                </div>
                <hr className="mx-8 mt-8 border-primary-600"></hr>
                <div className="grid grid-cols-3 px-8 mt-6 gap-12">
                    <div className="flex flex-col items-center text-light">
                        <p className="font-heading font-bold text-3xl">10+</p>
                        <p className="font-body text-xs text-center">Budget Recipes<br/>Available</p>
                    </div>
                    <div className="flex flex-col items-center text-light">
                        <p className="font-heading font-bold text-3xl">Affordable</p>
                        <p className="font-body text-xs text-center">Recipe Price<br/>Range</p>
                    </div>
                    <div className="flex flex-col items-center text-light">
                        <p className="font-heading font-bold text-3xl">3+</p>
                        <p className="font-body text-xs text-center">Local Stores<br/>Supported</p>
                    </div>
                </div>
            </div>
        </div>
    )
}