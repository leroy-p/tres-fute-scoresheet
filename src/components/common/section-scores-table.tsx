import React from 'react'
import styled from 'styled-components'
import { SectionColor } from '../../types/types'
import Points from './points'

interface IProps {
  points: number[]
  color: SectionColor
}

function SectionScoresTable({ points, color }: IProps) {
  return (
    <Container>
      {points.map((value, index) => (
        <ItemContainer key={index} color={color} itemsCount={points.length}>
          <PointContainer itemsCount={points.length}>
            <Points value={value} color={color} />
          </PointContainer>
          <p>{index + 1}</p>
        </ItemContainer>
      ))}
    </Container>
  )
}

export default SectionScoresTable

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

const ItemContainer = styled.div<{ color: SectionColor; itemsCount: number }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: ${({ itemsCount }) => itemsCount > 0 ? `calc(100vw / ${2 * itemsCount})` : '0'};

  & > p {
    color: ${({ color }) => {
      switch (color) {
        case SectionColor.YELLOW:
          return 'yellow'
        case SectionColor.BLUE:
          return 'blue'
        case SectionColor.GREEN:
          return 'green'
        case SectionColor.ORANGE:
          return 'orange'
        case SectionColor.PURPLE:
          return 'purple'
        default:
          return '#000000'
      }
    }};
  }
`

const PointContainer = styled.div<{ itemsCount: number }>`
  height: ${({ itemsCount }) => itemsCount > 0 ? `calc((100vh - 48px) * 9 / ${16 * 2 * itemsCount})` : '0'};
  width: ${({ itemsCount }) => itemsCount > 0 ? `calc((100vh - 48px) * 9 / ${16 * 2 * itemsCount})` : '0'};
`
