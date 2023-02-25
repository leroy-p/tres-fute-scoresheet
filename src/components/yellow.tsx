import React from 'react'
import styled from 'styled-components'

interface IProps {}

function Yellow(props: IProps) {
  return <Container></Container>
}

export default Yellow

const Container = styled.div`
  align-items: center;
  border: solid 2px yellow;
  display: flex;
  flex-direction: column;
  height: calc(100% / 3 - 8px);
  justify-content: center;
  width: calc(50% - 12px);
`
