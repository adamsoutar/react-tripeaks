import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Card } from './cardContainers'

const TargetHolderStyled = styled.div`
  position: relative;
  top: 30px;
  width: 270px; height: 155px;
  padding: 30px; border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
`

const TargetHolder = props => (
  <TargetHolderStyled>
    <Card style={{float: 'right'}} revealed>{props.target}</Card>
    <Card onClick={props.onStockClick}/>
  </TargetHolderStyled>
)

export default TargetHolder
