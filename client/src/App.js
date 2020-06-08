import React from 'react';
import './App.css';
import axios from "axios"
import Container from "./components/Container"

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
      <Container players={this.state.players}/>
    );
  }//end of render
}

export default App;
