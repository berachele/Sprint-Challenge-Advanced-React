import React from "react"

const PlayerCard = props => {
    console.log("Returning props in PlayerCard", props)

    return(
        <div className="card">
            <h2>Name: </h2>
            <h3>Country: </h3>
            <h4>Number of Searches: </h4>
        </div>
    )
}//end of PlayerCard

export default PlayerCard