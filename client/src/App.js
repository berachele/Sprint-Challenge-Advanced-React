import React from 'react';
import './App.css';
import axios from "axios"
import PlayerList from "./components/PlayerList"

class App extends React.Component {
  //constructor
  state= {
    players: []
  }

  //DidMount with axios will go here
  componentDidMount(){
    axios.get("http://localhost:5000/api/players")
    .then(response => {
      console.log("Response-->", response.data)
      this.setState({
        players: response.data
      })
    })
    .catch(error => {
      console.log("ERROR! Failed to render:", error)
    })
  }//end of DidMount

  //render
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Women's World Cup: Google Searches</h1>
          <button>Dark Mode</button>
        </header>
        <div class="cardBody">
          <PlayerList players={this.state.players} />
        </div>
      </div>
    );//end of return
  }//end of render
}

export default App;
