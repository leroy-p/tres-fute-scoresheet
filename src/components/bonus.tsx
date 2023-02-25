import React from 'react'
import styled from 'styled-components'

interface IProps {}

function Bonus(props: IProps) {
  return <Container></Container>
}

export default Bonus

const Container = styled.div`
  align-items: center;
  border: solid 2px black;
  display: flex;
  flex-direction: column;
  height: calc(100% / 3 - 8px);
  justify-content: center;
  width: calc(100% - 16px);
`
