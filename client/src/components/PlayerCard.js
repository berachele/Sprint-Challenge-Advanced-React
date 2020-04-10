import React from "react"

const PlayerCard = props => {
    console.log("Returning props in PlayerCard", props)

    return(
        <div className="card">
            <h2>Name: {props.name}</h2>
            <h3>Country: {props.country}</h3>
            <h4>Number of Searches: {props.search}</h4>
        </div>
    )
}//end of PlayerCard

export default PlayerCard