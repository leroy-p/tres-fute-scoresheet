import React from 'react'
import styled from 'styled-components'
import { IRound } from '../../types/types'
import Reward from './reward'

interface IProps {
  round: IRound
  action: () => void
  isChecked: boolean
}

function Round({ round, action, isChecked }: IProps) {
  return (
    <Container isChecked={isChecked} onClick={action}>
      <BoxContainer>
        {round.value}
        {isChecked && <CheckedText>X</CheckedText>}
      </BoxContainer>
      <RewardContainer>
        {round.reward && <Reward data={{ type: round.reward }} />}
      </RewardContainer>
    </Container>
  )
}

export default Round

const Container = styled.div<{ isChecked: boolean }>`
  align-items: center;
  border: solid 2px #ffffff;
  cursor: ${({ isChecked }) => (isChecked ? 'auto' : 'pointer')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding: 8px;
  pointer-events: ${({ isChecked }) => (isChecked ? 'none' : 'auto')};
`

const BoxContainer = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  color: black;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font-size: calc(((100vh * 9 / 16 - 16px) / 11 - 8px) / 2);
  height: calc((100vh * 9 / 16 - 16px) / 11 - 8px);
  justify-content: center;
  position: relative;
  width: calc((100vh * 9 / 16 - 16px) / 11 - 8px);

  @media (orientation: portrait) {
    font-size: calc(((100vw - 16px) / 11 - 8px) / 2);
    height: calc((100vw - 16px) / 11 - 8px);
    width: calc((100vw - 16px) / 11 - 8px);
  }
`

const RewardContainer = styled.div`
  align-items: center;
  display: flex;
  height: calc((100vh * 9 / 16 - 16px) / 11 - 8px);
  justify-content: center;
  width: calc((100vh * 9 / 16 - 16px) / 11 - 8px);

  @media (orientation: portrait) {
    height: calc((100vw - 16px) / 11 - 8px);
    width: calc((100vw - 16px) / 11 - 8px);
  }

  & > div {
    height: 50%;
    width: 50%;

    & > p {
      font-size: calc(((100vh * 9 / 16 - 16px) / 11 - 8px) / 3);

      @media (orientation: portrait) {
        font-size: calc(((100vw - 16px) / 11 - 8px) / 3);
      }
    }
  }
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
