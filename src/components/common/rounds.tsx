import React, { useState } from 'react'
import styled from 'styled-components'
import { IRound, RewardType } from '../../types/types'
import Round from './round'

interface IProps {
  rounds: IRound[]
  addReroll: () => void
  addPlusOne: () => void
}

function Rounds({ rounds, addReroll, addPlusOne }: IProps) {
  const [checkedRoundsIndex, setCheckRoundsIndex] = useState<number[]>([])

  function onClickRound(index: number) {
    if (!rounds[index]) return

    const checkedIndex = [...checkedRoundsIndex]

    if (
      !checkedIndex.includes(index) &&
      (index === 0 || checkedIndex.includes(index - 1))
    ) {
      checkedIndex.push(index)

      if (rounds[index]?.reward === RewardType.REROLL) {
        addReroll()
      } else if (rounds[index]?.reward === RewardType.PLUS_ONE) {
        addPlusOne()
      }
    }

    setCheckRoundsIndex(checkedIndex)
  }

  return (
    <Container>
      {rounds.map((round, index) => (
        <Round
          round={round}
          action={() => onClickRound(index)}
          isChecked={checkedRoundsIndex.includes(index)}
        />
      ))}
    </Container>
  )
}

export default Rounds

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
