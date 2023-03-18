import React from 'react'
import styled from 'styled-components'

import { BoxType, IBox, SectionColor } from '../../types/types'
import Points from './points'
import Reward from './reward'

interface IProps {
  box: IBox
  color: SectionColor
  isPurple?: boolean
  index: number
  clickEvent?: () => void
}

function Box({ color, box, isPurple, index, clickEvent }: IProps) {
  return (
    <Container
      isEmpty={box.type === BoxType.EMPTY}
      onClick={clickEvent}
      isPointer={clickEvent !== undefined && !box.isChecked}
    >
      {box.multiplier > 1 && (
        <MultiplierText isHidden={box.value > 0}>
          x{box.multiplier}
        </MultiplierText>
      )}
      {box.higherThan && (
        <HigherThanText isHidden={box.isChecked}>
          ≥{box.higherThan}
        </HigherThanText>
      )}
      {box.value > 0 && (
        <ScoreText isHidden={box.isChecked}>{box.value}</ScoreText>
      )}
      {box.isChecked && <CheckedText>X</CheckedText>}
      {isPurple && index > 0 && (
        <PurpleDecorator>
          <p>{'<'}</p>
        </PurpleDecorator>
      )}
      {box.reward && (
        <RewardContainer>
          <Reward data={box.reward} />
        </RewardContainer>
      )}
      {box.points && (
        <PointsContainer>
          <Points value={box.points} color={color} />
        </PointsContainer>
      )}
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

  @media (orientation: portrait) {
    font-size: calc(((100vw - 16px) / 11 - 8px) / 2);
    height: calc((100vw - 16px) / 11 - 8px);
    width: calc((100vw - 16px) / 11 - 8px);
  }
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

const HigherThanText = styled.p<{ isHidden?: boolean }>`
  color: green;
  opacity: ${({ isHidden }) => (isHidden ? '0.7' : '1')};
  font-weight: bold;
`

const PurpleDecorator = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: calc(-50% - 4px);
  position: absolute;
  top: 0;
  width: 100%;

  & > p {
    color: purple;
    font-size: 24px;
    font-weight: bold;
  }
`

const RewardContainer = styled.div`
  height: 50%;
  left: 25%;
  position: absolute;
  top: 90%;
  width: 50%;

  & > div > p {
    font-size: calc(((100vh * 9 / 16 - 16px) / 11 - 8px) / 3);

    @media (orientation: portrait) {
      font-size: calc(((100vw - 16px) / 11 - 8px) / 3);
    }
  }
`

const PointsContainer = styled.div`
  bottom: 90%;
  height: 50%;
  left: 25%;
  position: absolute;
  width: 50%;

  & > div > p {
    font-size: calc(((100vh * 9 / 16 - 16px) / 11 - 8px) / 3);

    @media (orientation: portrait) {
      font-size: calc(((100vw - 16px) / 11 - 8px) / 3);
    }
  }
`