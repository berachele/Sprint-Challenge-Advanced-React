import React from "react"
import PlayerCard from "./PlayerCard"

const PlayerList = props => {
    console.log("This is the props in PlayerList -->", props)

    return(
        <div className="playerlist">
            {props.players.map(player => {
                return <PlayerCard 
                key = {player.id}
                name = {player.name}
                country = {player.country}
                search = {player.searches}
                />
            })}
        </div>
    )
}//end of PlayerList

export default PlayerList