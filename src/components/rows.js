import React, { Fragment } from 'react'
import { Card, CardGroup, CardLine } from './cardContainers'

const Rows = props => (
  <Fragment>
    {props.rows.map((r, i) => (
      <CardLine margined={i !== 0}>
        {r.map(c => (
          <Card>{c}</Card>
        ))}
      </CardLine>
    ))}
  </Fragment>
)

export default Rows
