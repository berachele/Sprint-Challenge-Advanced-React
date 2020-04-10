import React from 'react';
import './App.css';
import PlayerList from "./components/PlayerList"

class App extends React.Component {
  //constructor
  state= {
    players: []
  }

  //DidMount with axios will go here
  componentDidMount(){

  }

  //render
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Women's World Cup</h1>
        </header>
        <div>
          <PlayerList /*players={this.state.players}*/ />
        </div>
      </div>
    );//end of return
  }//end of render
}

export default App;
