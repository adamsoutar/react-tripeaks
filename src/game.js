const oneSuit = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

// These are prefixed because there are React elements like <Card/>
class GameDeck {
  constructor () {
    this.cards = []
    // Fill deck
    for (let i = 0; i < 4; i++) this.cards = this.cards.concat(oneSuit)
    this.shuffle()
  }

  shuffle () {
    // https://stackoverflow.com/questions/6274339
    let a = this.cards
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    this.cards = a
  }

  pick (amnt) {
    let out = []
    for (let i = 0; i < amnt; i++) out.push(this.cards.pop())
    return out
  }
}

export { GameDeck }
