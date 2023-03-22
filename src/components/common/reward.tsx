import React from 'react'
import styled from 'styled-components'

import { IReward, RewardType, SectionColor } from '../../types/types'

import rerollImage from '../../assets/images/reroll.png'
import foxImage from '../../assets/images/icon-raccoon.png'

interface IProps {
  data: IReward
}

function Reward({ data }: IProps) {
  const { type, color, value } = data

  return (
    <Container color={color} type={type}>
      {value && <p>{value}</p>}
      {type === RewardType.DICE && !value && <p>X</p>}
      {type === RewardType.REROLL && <img alt='' className='reroll' src={rerollImage} />}
      {type === RewardType.PLUS_ONE && <p>+1</p>}
      {type === RewardType.FOX && <img alt="" src={foxImage} />}
      {type === RewardType.CHECK_OR_SIX && <p>X|6</p>}
    </Container>
  )
}

export default Reward

const Container = styled.div<{ color?: SectionColor; type: RewardType }>`
  align-items: center;
  border: ${({ color, type }) => {
      if (type === RewardType.FOX) return 'none'
      if (color === SectionColor.YELLOW) return 'solid 2px #ce8106'
      if (color === SectionColor.BLUE) return 'solid 2px #1f3a7c'
      if (color === SectionColor.GREEN) return 'solid 2px #07593a'
      if (color === SectionColor.ORANGE) return 'solid 2px #c65720'
      if (color === SectionColor.PURPLE) return 'solid 2px #742c96'
      if (color === SectionColor.WHITE) return 'solid 2px #ffffff'

      return 'solid 2px #ffffff'
    }};
  border-radius: 4px;
  background-color: ${({ color, type }) => {
    if (type === RewardType.FOX) return 'transparent'
    if (color === SectionColor.YELLOW) return '#ffefa1'
    if (color === SectionColor.BLUE) return '#82b8f9'
    if (color === SectionColor.GREEN) return '#79d8b6'
    if (color === SectionColor.ORANGE) return '#fcad77'
    if (color === SectionColor.PURPLE) return '#c697dd'
    if (color === SectionColor.WHITE) return '#ffffff'

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
    font-size: 12px;
  }

  & > img {
    height: calc(100% + 8px);
    width: calc(100% + 8px);
  }

  .reroll {
    height: 80%;
    width: 80%;
  }
`
