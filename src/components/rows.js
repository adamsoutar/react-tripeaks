import React, { Fragment } from 'react'
import { Card, CardGroup, CardLine, RowContainer } from './cardContainers'

const Rows = props => (
  <RowContainer>
    {props.rows.map((r, i) => (
      i === 1 ? (
        <Fragment key={i}>
          <CardLine zIndex={1} margined spaceEvenly>
            <CardGroup left={30}>
              <Card onClick={() => { props.onCardClick(1, 0) }}>{props.rows[1][0]}</Card>
              <Card onClick={() => { props.onCardClick(1, 1) }}>{props.rows[1][1]}</Card>
            </CardGroup>
            <CardGroup>
              <Card onClick={() => { props.onCardClick(1, 2) }}>{props.rows[1][2]}</Card>
              <Card onClick={() => { props.onCardClick(1, 3) }}>{props.rows[1][3]}</Card>
            </CardGroup>
            <CardGroup left={-30}>
              <Card onClick={() => { props.onCardClick(1, 4) }}>{props.rows[1][4]}</Card>
              <Card onClick={() => { props.onCardClick(1, 5) }}>{props.rows[1][5]}</Card>
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
            onClick={() => { props.onCardClick(i, j) }}
            revealed={i === 3}
            key={j}>
            {x}</Card>)}
        </CardLine>
      )
    ))}
  </RowContainer>
)

export default Rows
