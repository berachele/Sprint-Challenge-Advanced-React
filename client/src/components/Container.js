import React from "react"
import PlayerList from "./PlayerList"
import useDarkMode from "../hooks/useDarkMode"

const Container = props => {
    console.log("PROPS IN CONTAINER", props)
    //bringing in hook
    const [darkMode, setDarkMode] = useDarkMode()
    
    //create togglemode
    const toggleMode = event => {
      event.preventDefault()
      setDarkMode(!darkMode);
    }
    
    return(
        <div className="App">
            <header className="App-header">
                <h1 data-testid="header">Women's World Cup: Google Searches</h1>
                <button data-testid="button" onClick={toggleMode}>Dark Mode</button>
            </header>
            <div class="cardBody">
                <PlayerList players={props.players} />
            </div>
      </div>
    )
}

export default Container