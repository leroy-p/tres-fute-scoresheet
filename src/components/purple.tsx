import React from 'react'
import styled from 'styled-components'

import { IPurpleData } from '../hooks/use-purple'
import Box from './common/box'

interface IProps {
  purpleData: IPurpleData
  clickEvent: () => void
}

function Purple({ purpleData, clickEvent }: IProps) {
  const { boxes } = purpleData

  return (
    <Container onClick={() => clickEvent()}>
      {boxes.map((box, index) => (
        <Box key={index} box={box} />
      ))}
    </Container>
  )
}

export default Purple

const Container = styled.div`
  align-items: center;
  border: solid 2px purple;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: calc(100% / 9 - 8px);
  justify-content: space-between;
  padding: 8px;
  width: calc(100% - 16px);
`
