const oneSuit = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
// Fill revealed & picked cards arrays
let reveals = [
  getReturns(() => false, 3),
  getReturns(() => false, 6),
  getReturns(() => false, 9),
  getReturns(() => true, 10),
]
let picks = [
  getReturns(() => false, 3),
  getReturns(() => false, 6),
  getReturns(() => false, 9),
  getReturns(() => false, 10),
]
let coloursLeft = [26, 26]
let colours = [
  getReturns(getCardColour, 3),
  getReturns(getCardColour, 6),
  getReturns(getCardColour, 9),
  getReturns(getCardColour, 10),
]

function getReturns (func, num) {
  let out = []
  for (let i = 0; i < num; i++) out.push(func())
  return out
}

function hitsTarget (card, target) {
  let bI = oneSuit.indexOf(target) - 1
  let aI = oneSuit.indexOf(target) + 1
  // Wrap array, Ie. K matches A
  if (bI === -1) bI = oneSuit.length - 1
  if (aI === oneSuit.length) aI = 0
  return (oneSuit[bI] === card || oneSuit[aI] === card)
}

function updateRevealed (r, i) {
  if (r === 3) return true
  // The magic reveal function
  // newI = the i of the card below on the next r
  let newI = Math.floor(i * (2 - 0.5 * r))
  let card1 = picks[r + 1][newI]
  let card2 = picks[r + 1][newI + 1]
  let revealed = (card1 && card2)
  reveals[r][i] = revealed
  return revealed
}

function getCardColour () {
  /* NOTE: This can produce oddities such as 4 red aces,
           but it's an easy way to split the 52 cards red
           and black since I couldn't think of another
           way that wasn't inneficient/janky. */
  // Randomly red or black
  let colour = Math.round(Math.random())
  // Flip to black if we're out of red, etc
  if (coloursLeft[colour] === 0) colour = (colour === 0) ? 1 : 0
  coloursLeft[colour] -= 1
  return ['black', 'red'][colour]
}

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

export { GameDeck, hitsTarget, reveals, updateRevealed, picks, colours, getCardColour }
