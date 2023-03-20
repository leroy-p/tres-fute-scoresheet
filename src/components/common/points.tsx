import React from 'react'
import styled from 'styled-components'

import { SectionColor } from '../../types/types'

interface IProps {
  value: number
  color: SectionColor
}

function Points({ value, color }: IProps) {
  return (
    <Container color={color}>
      <p>{value}</p>
    </Container>
  )
}

export default Points

const Container = styled.div<{ color?: SectionColor }>`
  align-items: center;
  border: solid 2px #ffffff;
  border: ${({ color }) => {
    if (color === SectionColor.YELLOW) return 'solid 2px #ce8106'
    if (color === SectionColor.BLUE) return 'solid 2px #1f3a7c'
    if (color === SectionColor.GREEN) return 'solid 2px #07593a'
    if (color === SectionColor.ORANGE) return 'solid 2px #c65720'
    if (color === SectionColor.PURPLE) return 'solid 2px #742c96'
    if (color === SectionColor.WHITE) return 'solid 2px #ffffff'

    return 'solid 2px #ffffff'
  }};
  border-radius: 50%;
  background-color: ${({ color }) => {
    if (color === SectionColor.YELLOW) return '#ffefa1'
    if (color === SectionColor.BLUE) return '#82b8f9'
    if (color === SectionColor.GREEN) return '#79d8b6'
    if (color === SectionColor.ORANGE) return '#fcad77'
    if (color === SectionColor.PURPLE) return '#c697dd'
    if (color === SectionColor.WHITE) return '#000000'

    return '#000000'
  }};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;

  & > p {
    color: ${({ color }) => {
      if (color === SectionColor.YELLOW) return '#ce8106'
      if (color === SectionColor.BLUE) return '#1f3a7c'
      if (color === SectionColor.GREEN) return '#07593a'
      if (color === SectionColor.ORANGE) return '#c65720'
      if (color === SectionColor.PURPLE) return '#742c96'
      if (color === SectionColor.WHITE) return '#ffffff'

      return '#ffffff'
    }};
    font-weight: bold;
  }
`
