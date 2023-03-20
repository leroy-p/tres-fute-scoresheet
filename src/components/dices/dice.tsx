import React from 'react'
import styled from 'styled-components'
import { SectionColor } from '../../types/types'

interface IProps {
  color: SectionColor
  value: number
  onClick?: () => void
}

function Dice({ color, value, onClick }: IProps) {
  return (
    <Container color={color} onClick={onClick} isCursor={onClick !== undefined}>
      <p>{value}</p>
    </Container>
  )
}

export default Dice

const Container = styled.div<{ color: SectionColor; isCursor: boolean }>`
  align-items: center;
  cursor: ${({ isCursor }) => isCursor ? 'pointer' : 'auto'};
  background-color: ${({ color }) => {
    switch (color) {
      case SectionColor.YELLOW:
        return '#ffefa1'
      case SectionColor.BLUE:
        return '#82b8f9'
      case SectionColor.GREEN:
        return '#79d8b6'
      case SectionColor.ORANGE:
        return '#fcad77'
      case SectionColor.PURPLE:
        return '#c697dd'
      case SectionColor.WHITE:
        return '#ffffff'
      default:
        return '#000000'
    }
  }};
  display: flex;
  flex-direction: column;
  height: 64px;
  justify-content: center;
  width: 64px;

  & > p {
    color: ${({ color }) => color === SectionColor.YELLOW || color === SectionColor.WHITE ? '#000000' : '#ffffff'};
    font-weight: bold;
  }
`
