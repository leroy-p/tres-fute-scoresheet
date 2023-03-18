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
  border: solid 1px #ffffff;
  border-radius: 50%;
  background-color: ${({ color }) => {
    if (color === SectionColor.YELLOW) return 'yellow'
    if (color === SectionColor.BLUE) return 'blue'
    if (color === SectionColor.GREEN) return 'green'
    if (color === SectionColor.ORANGE) return 'orange'
    if (color === SectionColor.PURPLE) return 'purple'
    if (color === SectionColor.WHITE) return 'white'

    return '#000000';
  }};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;

  & > p {
    color: ${({ color }) => color === SectionColor.YELLOW || color === SectionColor.WHITE ? '#000000' : '#ffffff'};
    font-weight: bold;
  }
`
