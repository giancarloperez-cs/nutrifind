export default function SectionTitle({headerText}){
    return(
        <div className="h-[5vh] bg-primary">
            <div>
                <p className="font-heading text-light font-bold text-2xl px-4 py-2">{headerText}</p>
            </div>
        </div>
    )
}