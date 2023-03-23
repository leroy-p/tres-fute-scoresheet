import React from 'react'
import styled from 'styled-components'
import { useBonus } from '../../hooks/use-bonus'
import { RewardType } from '../../types/types'
import ItemsRow from './items-row'
import Rounds from '../common/rounds'

import { rounds } from '../../types/section-defaults'

interface IProps {
  data: ReturnType<typeof useBonus>
  isDisabled?: boolean
  setIsMenuOpen: (value: boolean) => void
}

function Bonus({ data, isDisabled, setIsMenuOpen }: IProps) {
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
    <Container isDisabled={isDisabled}>
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
    </Container>
  )
}

export default Bonus

const Container = styled.div<{ isDisabled?: boolean }>`
  align-items: center;
  border: solid 2px black;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: calc(100% / 3 - 8px);
  justify-content: center;
  gap: 16px;
  opacity: ${({ isDisabled }) => isDisabled ? '0.3' : '1'};
  padding: 8px;
  pointer-events: ${({ isDisabled }) => isDisabled ? 'none' : 'auto'};
  position: relative;
  width: calc(100% - 16px);
`