import React from 'react'
import styled from 'styled-components'

import { usePurple } from '../hooks/use-purple'
import Box from './common/box'

interface IProps {
  setShowNumberPicker: (value: boolean) => void
}

function Purple({ setShowNumberPicker }: IProps) {
  const { boxes } = usePurple()

  return (
    <Container>
      {boxes.map((box, index) => (
        <Box action={() => setShowNumberPicker(true)} key={index} box={box} />
      ))}
    </Container>
  )
}

export default Purple

const Container = styled.div`
  align-items: center;
  border: solid 2px purple;
  display: flex;
  flex-direction: row;
  height: calc(100% / 9 - 8px);
  justify-content: space-between;
  padding: 8px;
  width: calc(100% - 16px);
`
