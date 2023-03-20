import React from 'react'
import styled from 'styled-components'
import { useBonus } from '../hooks/use-bonus'
import { RewardType } from '../types/types'
import ItemsRow from './bonus/items-row'
import Rounds from './common/rounds'

import { rounds } from '../types/section-defaults'

interface IProps {
  data: ReturnType<typeof useBonus>
  score: number
  setIsMenuOpen: (value: boolean) => void
}

function Bonus({ data, score, setIsMenuOpen }: IProps) {
  const {
    plusOneItems,
    rerollItems,
    hasPlusOneAvailable,
    hasRerollAvailable,
    addReroll,
    addPlusOne,
    useReroll,
    usePlusOne,
  } = data

  return (
    <Container>
      <Rounds
        addPlusOne={addPlusOne}
        addReroll={addReroll}
        rounds={rounds}
        setIsMenuOpen={setIsMenuOpen}
      />
      <ItemsRow
        items={rerollItems}
        isPointer={hasRerollAvailable}
        type={RewardType.REROLL}
        useAction={useReroll}
      />
      <ItemsRow
        items={plusOneItems}
        isPointer={hasPlusOneAvailable}
        type={RewardType.PLUS_ONE}
        useAction={usePlusOne}
      />
      <ScoreDisplayer>Total score: {score}</ScoreDisplayer>
    </Container>
  )
}

export default Bonus

const Container = styled.div`
  align-items: center;
  border: solid 2px black;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: calc(100% / 3 - 8px);
  justify-content: center;
  gap: 16px;
  padding: 8px;
  position: relative;
  width: calc(100% - 16px);
`

const ScoreDisplayer = styled.p`
  bottom: 2px;
  font-size: 12px;
  position: absolute;
  right: 2px;
`