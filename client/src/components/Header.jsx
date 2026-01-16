export default function Header({headingText, subheadingText, bodyText, variant="primary", onClick, className=""}){
    return(
        <div className="h-[30vh] relative bg-cover bg-center" style={{backgroundImage: "url('/images/RecipeBrowser-hero-bg.jpg')"}}>
            <div className="absolute inset-0 bg-primary opacity-93">
            </div>
            <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-col pt-10 px-4">
                    <h1 className="text-3xl font-bold font-heading text-light text-center mb-5">
                    {headingText}
                    </h1>
                </div>
                <div className="flex flex-col items-start px-4 mt-5">
                    <p className="text-[20px] text-light font-heading font-bold pb-4">{subheadingText}</p>
                    <p className="text-[16px] text-light font-body">
                        {bodyText}
                    </p>
                </div>
            </div>
        </div>
    )
}