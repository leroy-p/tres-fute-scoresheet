import React from 'react'
import styled from 'styled-components'
import { SectionColor } from '../../types/types'
import ScoreDisplayer from './score-displayer'

interface IProps {
  color: SectionColor
  children: JSX.Element
  clickEvent: () => void
  isPointer: boolean
  score: number
}

function RowSection({ color, children, clickEvent, isPointer, score }: IProps) {
  return (
    <Container color={color} isPointer={isPointer} onClick={clickEvent}>
      {children}
      <ScoreDisplayer score={score} />
    </Container>
  )
}

export default RowSection

const Container = styled.div<{ isPointer: boolean; color: SectionColor }>`
  align-items: center;
  border: ${({ color }) => {
    if (color === SectionColor.YELLOW) return 'solid 2px #ffefa1'
    if (color === SectionColor.BLUE) return 'solid 2px #82b8f9'
    if (color === SectionColor.GREEN) return 'solid 2px #79d8b6'
    if (color === SectionColor.ORANGE) return 'solid 2px #fcad77'
    if (color === SectionColor.PURPLE) return 'solid 2px #c697dd'
    if (color === SectionColor.WHITE) return 'solid 2px #ffffff'

    return 'solid 2px #000000';
  }};
  border-radius: 12px;
  cursor: ${({ isPointer }) => (isPointer ? 'pointer' : 'auto')};
  display: flex;
  flex-direction: row;
  height: calc(100% / 9 - 8px);
  justify-content: space-between;
  padding: 8px;
  position: relative;
  width: calc(100% - 16px);
`
