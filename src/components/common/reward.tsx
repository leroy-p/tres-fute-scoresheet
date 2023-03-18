import React from 'react'
import styled from 'styled-components'

import { IReward, RewardType, SectionColor } from '../../types/types'

interface IProps {
  data: IReward
}

function Reward({ data }: IProps) {
  const { type, color, value } = data

  return (
    <Container color={color} type={type}>
      {value && <p>{value}</p>}
      {type === RewardType.DICE && !value && <p>X</p>}
      {(type === RewardType.REROLL) && <p>R</p>}
      {(type === RewardType.PLUS_ONE) && <p>+1</p>}
      {(type === RewardType.FOX) && <p>F</p>}
      {(type === RewardType.CHECK_OR_SIX) && <p>X|6</p>}
    </Container>
  )
}

export default Reward

const Container = styled.div<{ color?: SectionColor; type: RewardType }>`
  align-items: center;
  border: solid 1px #ffffff;
  border-radius: 4px;
  background-color: ${({ color, type }) => {
    if (type === RewardType.FOX) return 'red'
    if (color === SectionColor.YELLOW) return 'yellow'
    if (color === SectionColor.BLUE) return 'blue'
    if (color === SectionColor.GREEN) return 'green'
    if (color === SectionColor.ORANGE) return 'orange'
    if (color === SectionColor.PURPLE) return 'purple'

    return '#000000';
  }};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;

  & > p {
    color: ${({ color  }) => color === SectionColor.YELLOW ? '#000000' : '#ffffff'};
    font-size: 12px;
  }
`
