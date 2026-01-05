
function Hello({person}){
    return(
        <div>
            <h1>
                {person.message} {person.name}! Your seat numbers are {person.seatNumbers.join(", ")}
            </h1>
        </div>
    )
}

export default Hello;