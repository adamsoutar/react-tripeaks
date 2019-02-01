import styled, { css } from 'styled-components'

const RowContainer = styled.div`
 width: 1200px;
`

const Card = styled.div`
  height: 155px; width: 120px;
  line-height: 150px;
  font-size: 60px;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  float: left;
  user-select: none;
  pointer-events: all;

  background-image: radial-gradient(#3a6eb2, #2a5082);
  color: transparent;

  ${props => props.revealed && css`
    background-image: radial-gradient(#fff, #c6c6c6);
    color: ${props => props.colour};
  `}

  ${props => props.picked && css`
    pointer-events: none !important;
    opacity: 0;
  `}
`

const CardGroup = styled.div`
  position: relative;
  left: ${props => props.left}px;
  width: 240px; height: 155px;
  white-space:nowrap;
  pointer-events: none;
`

const CardLine = styled.div`
  ${props => props.margined && css`
    margin-top: -50px;
  `}
  width: 100%; height: 155px;
  text-align: center;
  display: flex;
  justify-content: center;
  ${props => props.spaceEvenly && css`
    justify-content: space-evenly;
  `}
  position: relative;
  pointer-events: none;
  z-index: ${props => props.zIndex};
`

export { Card, CardGroup, CardLine, RowContainer }
