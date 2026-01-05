export default function Fruits(){
    const Fruits = ["Banana", "Coconut", "Cherry", "Watermelon"]
    return(
        <div>
            <ul>
                {Fruits.map(fruit =>
                    (<li key={fruit}>{fruit}</li>) 
                )}
            </ul>
        </div>
    )
}