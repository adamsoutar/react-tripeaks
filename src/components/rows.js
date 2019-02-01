import React, { Fragment } from 'react'
import { Card, CardGroup, CardLine, RowContainer } from './cardContainers'

// I hate this. It sucks.
// Row two has to have every two cards contained in a CardGroup for layout
const Rows = props => (
  <RowContainer>
    {props.rows.map((r, i) => (
      i === 1 ? (
        <Fragment key={i}>
          <CardLine zIndex={1} margined spaceEvenly>
            <CardGroup left={30}>
              <Card colour={props.colours[1][0]} picked={props.picks[1][0]} revealed={props.reveals[1][0]} onMouseDown={() => { props.onCardClick(1, 0) }}>{props.rows[1][0]}</Card>
              <Card colour={props.colours[1][1]} picked={props.picks[1][1]} revealed={props.reveals[1][1]} onMouseDown={() => { props.onCardClick(1, 1) }}>{props.rows[1][1]}</Card>
            </CardGroup>
            <CardGroup>
              <Card colour={props.colours[1][2]} picked={props.picks[1][2]} revealed={props.reveals[1][2]} onMouseDown={() => { props.onCardClick(1, 2) }}>{props.rows[1][2]}</Card>
              <Card colour={props.colours[1][3]} picked={props.picks[1][3]} revealed={props.reveals[1][3]} onMouseDown={() => { props.onCardClick(1, 3) }}>{props.rows[1][3]}</Card>
            </CardGroup>
            <CardGroup left={-30}>
              <Card colour={props.colours[1][4]} picked={props.picks[1][4]} revealed={props.reveals[1][4]} onMouseDown={() => { props.onCardClick(1, 4) }}>{props.rows[1][4]}</Card>
              <Card colour={props.colours[1][5]} picked={props.picks[1][5]} revealed={props.reveals[1][5]} onMouseDown={() => { props.onCardClick(1, 5) }}>{props.rows[1][5]}</Card>
            </CardGroup>
          </CardLine>
        </Fragment>
      ) : (
        <CardLine
          zIndex={i}
          spaceEvenly={i === 0}
          margined={i !== 0}
          key={i}
          flex>
          {r.map((x, j) => <Card
            onMouseDown={() => { props.onCardClick(i, j) }}
            revealed={props.reveals[i][j]}
            picked={props.picks[i][j]}
            colour={props.colours[i][j]}
            key={j}>
            {x}</Card>)}
        </CardLine>
      )
    ))}
  </RowContainer>
)

export default Rows
