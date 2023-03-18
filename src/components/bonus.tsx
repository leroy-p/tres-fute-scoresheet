import React from 'react'
import styled from 'styled-components'
import { useBonus } from '../hooks/use-bonus'
import { RewardType } from '../types/types'
import ItemsRow from './bonus/items-row'

interface IProps {
  data: ReturnType<typeof useBonus>
  score: number
}

function Bonus({ data, score }: IProps) {
  const {
    plusOneItems,
    rerollItems,
    hasPlusOneAvailable,
    hasRerollAvailable,
    addPlusOne,
    addReroll,
    usePlusOne,
    useReroll,
  } = data

  return (
    <Container>
      <ItemsRow items={rerollItems} isPointer={hasRerollAvailable} type={RewardType.REROLL} />
      <ItemsRow items={plusOneItems} isPointer={hasPlusOneAvailable} type={RewardType.PLUS_ONE} />
      <ButtonsContainer>
        <button onClick={addReroll}>add reroll</button>
        <button onClick={useReroll}>use reroll</button>
      </ButtonsContainer>
      <ButtonsContainer>
        <button onClick={addPlusOne}>add +1</button>
        <button onClick={usePlusOne}>use +1</button>
      </ButtonsContainer>
      <ScoreDisplayer>Total score: {score}</ScoreDisplayer>
    </Container>
  )
}

export default Bonus

const Container = styled.div`
  align-items: center;
  border: solid 2px black;
  display: flex;
  flex-direction: column;
  height: calc(100% / 3 - 8px);
  justify-content: center;
  gap: 16px;
  padding: 8px;
  position: relative;
  width: calc(100% - 16px);
`

const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  width: 100%;

  & > button {
    color: #ffffff;
    border: solid 1px #ffffff;
    padding: 8px;
  }
`

const ScoreDisplayer = styled.p`
  bottom: 2px;
  font-size: 12px;
  position: absolute;
  right: 2px;
`