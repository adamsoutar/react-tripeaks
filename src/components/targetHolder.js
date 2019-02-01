import React from 'react'
import styled from 'styled-components'
import { Card } from './cardContainers'

const TargetHolderStyled = styled.div`
  position: relative;
  top: 30px;
  width: 270px; height: 155px;
  padding: 30px; border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  margin: auto;
`

const TargetHolder = props => (
  <TargetHolderStyled>
    <Card
      style={{ float: 'right' }}
      colour={props.targetColour}
      revealed>{props.target}</Card>
    <Card
      picked={props.dry}
      onClick={props.onStockClick} />
  </TargetHolderStyled>
)

export default TargetHolder
