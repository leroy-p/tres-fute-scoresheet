import React from 'react'
import styled from 'styled-components'

interface IProps {}

function Green(props: IProps) {
  return <Container></Container>
}

export default Green

const Container = styled.div`
  align-items: center;
  border: solid 2px green;
  display: flex;
  flex-direction: column;
  height: calc(100% / 9 - 8px);
  justify-content: center;
  width: calc(100% - 16px);
`
