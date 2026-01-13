

export default function Badge({icon, text, variant="primary", className=""}){
    const variants = {
        primary: "bg-primary-600 hover:bg-primary-700 text-light",
        light: "bg-light hover:bg-gray-200 text-light border border-none",
        outline: "bg-transparent hover:bg-primary-100 text-light border border-light",
    }
    return(
        <div 
        className={`relative bg-primary-500 w-fit text-center rounded-lg px-4 py-2  gap-2 flex ${variants[variant]} ${className=""}`}>
            {icon && <span className="text-xs mt-0.5">{icon}</span>}
            <span className="text-xs">{text}</span>
        </div>
    )
}