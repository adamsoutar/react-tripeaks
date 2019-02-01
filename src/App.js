import React, { Component, Fragment } from 'react'
import Rows from './components/rows'
import TargetHolder from './components/targetHolder'
import { GameDeck, hitsTarget } from './game'

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
      ],
      target: deck.pick(1)[0]
    }
  }

  handleCardClick (r, i) {
    let card = this.state.rows[r][i]
    if (!hitsTarget(card, this.state.target)) {
      console.log("Invalid")
      return
    }
    console.log("Valid")
  }

  render() {
    return (
      <Fragment>
        <Rows
          onCardClick={this.handleCardClick.bind(this)}
          rows={this.state.rows}/>

        <TargetHolder
          onStockClick={() => {
            this.setState({
              target: this.state.deck.pick(1)[0]
            })
          }}
          target={this.state.target}/>
      </Fragment>
    )
  }
}

export default App
