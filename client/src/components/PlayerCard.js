import React from "react"

const PlayerCard = props => {
    // console.log("Returning props in PlayerCard", props)

    return(
        <div className="card" data-testid="playercard">
            <h2>{props.name}</h2>
            <p>Country: {props.country}</p>
            <p>Number of Searches: {props.search}</p>
        </div>
    )
}//end of PlayerCard

export default PlayerCard