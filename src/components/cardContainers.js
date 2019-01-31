import styled, { css } from 'styled-components'

const Card = styled.div`
  height: 155px; width: 120px;
  background-color: white;
  color: black;
  line-height: 150px;
  font-size: 60px;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  float: left;
  margin: auto;
  background-image: radial-gradient(#fff, #c6c6c6);
`

const CardGroup = styled.div`

`

const CardLine = styled.div`
  position: relative;
  ${ props => props.margined && css`
    margin-top: -30px;
  `}
  width: 100%; height: 155px;
  display: flex;
  justify-content: center;
`

export { Card, CardGroup, CardLine }
