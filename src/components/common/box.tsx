import React from 'react'
import styled from 'styled-components'

import { BoxType, IBox } from '../../types/types'

interface IProps {
  box: IBox
  multipler: number
  clickEvent?: () => void
}

function Box({ box, multipler, clickEvent }: IProps) {
  return (
    <Container
      isEmpty={box.type === BoxType.EMPTY}
      onClick={clickEvent}
      isPointer={clickEvent !== undefined && !box.isChecked}
    >
      {multipler > 1 && (
        <MultiplierText isHidden={box.value > 0 && multipler > 1}>
          x{multipler}
        </MultiplierText>
      )}
      {box.value > 0 && <ScoreText isHidden={box.isChecked}>{box.value}</ScoreText>}
      {box.isChecked && <CheckedText>X</CheckedText>}
    </Container>
  )
}

export default Box

const Container = styled.div<{ isEmpty: boolean; isPointer: boolean }>`
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  color: black;
  cursor: ${({ isPointer }) => (isPointer ? 'pointer' : 'auto')};
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font-size: calc(((100vh * 9 / 16 - 16px) / 11 - 8px) / 2);
  height: calc((100vh * 9 / 16 - 16px) / 11 - 8px);
  justify-content: center;
  opacity: ${({ isEmpty }) => (isEmpty ? '0' : '1')};
  pointer-events: ${({ isEmpty }) => (isEmpty ? 'none' : 'auto')};
  position: relative;
  width: calc((100vh * 9 / 16 - 16px) / 11 - 8px);
`

const ScoreText = styled.p<{ isHidden?: boolean }>`
  align-items: center;
  color: #000000;
  font-size: calc(((100vh * 9 / 16 - 16px) / 11 - 8px) / 2);
  font-weight: bold;
  display: flex;
  height: 100%;
  justify-content: center;
  opacity: ${({ isHidden }) => (isHidden ? '0.7' : '1')};
  position: absolute;
  width: 100%;
`

const CheckedText = styled.p`
  align-items: center;
  color: #000000;
  font-size: calc((100vh * 9 / 16 - 16px) / 11 - 8px);
  font-weight: bold;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
`

const MultiplierText = styled.p<{ isHidden?: boolean }>`
  color: orange;
  opacity: ${({ isHidden }) => (isHidden ? '0.7' : '1')};
  font-weight: bold;
`
