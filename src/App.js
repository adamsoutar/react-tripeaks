import React, { Component } from 'react'
import Rows from './components/rows'
import { GameDeck } from './game'

class App extends Component {
  constructor (props) {
    super(props)
    let deck = new GameDeck()
    this.state = {
      deck: deck,
      rows: [
        deck.pick(3),
        deck.pick(6),
        deck.pick(9),
        deck.pick(10)
      ]
    }
  }

  render() {
    return <Rows rows={this.state.rows}> </Rows>
  }
}

export default App
