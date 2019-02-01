import React, { Component, Fragment } from 'react'
import Rows from './components/rows'
import TargetHolder from './components/targetHolder'
import { GameDeck, hitsTarget, reveals, updateRevealed, picks, colours, movesLeft, getCardColour, allPicked } from './game'
import styled from 'styled-components'
import Media from 'react-media'

const AppStyled = styled.div`
  width: 1200px; height: 715px;
  position: fixed;
  top: calc(50% - 357px);
  left: calc(50% - 600px);
`

const Message = styled.div`
  width: calc(100% - 104px);
  z-index: 10;
  border-left: 4px solid green;
  height: 34px; background-color: #4bd185;
  padding: 30px;
  font-size: 17px;
  line-height: 17px;
  text-align: center;
  position: absolute;
  left: calc(50% - (50% - 26px));
  top: calc(50% - 100px);
`

const WarningStyled = styled.div`
  background-color: #efc88d;
  border-left: 4px solid #ef695b;
  padding: 20px;
  width: calc(100% - 84px);
  margin: auto;
  position: relative; top: 40px;
  color: black;
`

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
      target: deck.pick(1)[0],
      targetColour: getCardColour(),
      forceRender: false,
      message: "To play, click a card that is one above or below the target card. If you can't find one, click the face-down deck to draw.",
      messageClickAction: () => { this.setState({ message: '' }) }
    }
  }

  handleCardClick (r, i) {
    let card = this.state.rows[r][i]
    if (!hitsTarget(card, this.state.target)) return

    if (reveals[r][i]) {
      picks[r][i] = true
      // This sucks, and is definitely not the right way
      for (let x = 0; x < this.state.rows.length - 1; x++) {
        for (let y = 0; y < this.state.rows[x].length; y++) updateRevealed(x, y)
      }
      // This feels wrong and janky.
      this.setState({
        target: card,
        targetColour: colours[r][i],
        forceRender: !this.state.forceRender
      })

      // Detect win
      if (allPicked()) {
        this.setState({
          message: 'You won!',
          messageClickAction: () => { window.location.reload() }
        })
      }

      // Detect loss
      if (
        !movesLeft(this.state.rows, card) &&
        this.state.deck.cards.length === 0
      ) {
        this.setState({
          message: 'You lost, there are no remaining moves to make.',
          messageClickAction: () => { window.location.reload() }
        })
      }
    }
  }

  render () {
    return (
      <Media query={{ minWidth: 1200, minHeight: 715 }}>
        {
          matches => matches ? (
            <AppStyled>
              {this.state.message === '' ? <Fragment /> : (
                <Message onClick={this.state.messageClickAction}>{this.state.message}<br />Click to dismiss</Message>
              )}
              <Rows
                picks={picks}
                reveals={reveals}
                colours={colours}
                onCardClick={this.handleCardClick.bind(this)}
                rows={this.state.rows} />

              <TargetHolder
                onStockClick={() => {
                  this.setState({
                    target: this.state.deck.pick(1)[0],
                    targetColour: getCardColour()
                  })
                }}
                dry={this.state.deck.cards.length === 0}
                targetColour={this.state.targetColour}
                target={this.state.target} />
            </AppStyled>
          ) : (
            <WarningStyled>
              Sorry, you need a larger window to play this game.<br />
              If you're playing on mobile, you might have to try again with a desktop.
            </WarningStyled>
          )
        }
      </Media>
    )
  }
}

export default App
