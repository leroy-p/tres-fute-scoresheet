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
  width: ${({ itemsCount }) =>
    itemsCount > 0 ? `calc(100vw / ${2 * itemsCount})` : '0'};

  & > p {
    color: ${({ color }) => {
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
    font-size: calc(((100vh * 9 / 16 - 16px) / 11 - 8px) / 3);

    @media (orientation: portrait) {
      font-size: calc(((100vw - 16px) / 11 - 8px) / 3);
    }
  }
`

const PointContainer = styled.div<{ itemsCount: number }>`
  height: ${({ itemsCount }) =>
    itemsCount > 0 ? `calc((100vh - 48px) * 9 / ${16 * 2 * itemsCount})` : '0'};
  width: ${({ itemsCount }) =>
    itemsCount > 0 ? `calc((100vh - 48px) * 9 / ${16 * 2 * itemsCount})` : '0'};

  & > div > p {
    font-size: calc(((100vh * 9 / 16 - 16px) / 11 - 8px) / 3);

    @media (orientation: portrait) {
      font-size: calc(((100vw - 16px) / 11 - 8px) / 3);
    }
  }

  @media (orientation: portrait) {
    height: ${({ itemsCount }) =>
      itemsCount > 0 ? `calc((100vw - 48px) / ${2 * itemsCount})` : '0'};
    width: ${({ itemsCount }) =>
      itemsCount > 0 ? `calc((100vw - 48px) / ${2 * itemsCount})` : '0'};
  }
`
