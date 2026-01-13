export default function Button({text, variant = "primary", onClick, className=""}){
    const variants = {
        primary: "bg-primary-600 hover:bg-primary-700 text-light",
        light: "bg-light hover:bg-gray-200 text-primary border border-none",
        outline: "bg-transparent hover:bg-primary-100 text-light border border-light",
    }
    return(
        <button 
        className={`px-4 py-4 rounded-lg font-body font-semibold transition-colors ${variants[variant]} ${className}`} onClick={onClick}>
            {text}  
        </button>
    )
}