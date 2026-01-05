export default function Pill({text, dotColor = "bg-primary-500"}){
    return(
        <div className="flex items-center gap-2 bg-primary-600 px-4 py-2 rounded-full">
            <span className={`w-2 h-2 ${dotColor} rounded-full`}></span>
            <span className="text-sm font-body text-light">{text}</span>
        </div>
    )
}