import React from 'react'
import styled from 'styled-components'
import { IOrangeData } from '../hooks/use-orange'
import Box from './common/box'

interface IProps {
  orangeData: IOrangeData
  clickEvent: () => void
}

function Orange({ orangeData, clickEvent }: IProps) {
  const { boxes } = orangeData

  return (
    <Container
      onClick={() => clickEvent()}
      isPointer={boxes.findIndex((b) => b.value === 0) !== -1}
    >
      {boxes.map((box, index) => (
        <Box key={index} box={box} />
      ))}
    </Container>
  )
}

export default Orange

const Container = styled.div<{ isPointer: boolean }>`
  align-items: center;
  border: solid 2px orange;
  cursor: ${({ isPointer }) => (isPointer ? 'pointer' : 'auto')};
  display: flex;
  flex-direction: row;
  height: calc(100% / 9 - 8px);
  justify-content: space-between;
  padding: 8px;
  width: calc(100% - 16px);
`
