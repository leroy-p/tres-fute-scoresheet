import React, { useState } from 'react'
import styled from 'styled-components'
import { IRound, RewardType } from '../../types/types'
import Round from './round'

interface IProps {
  rounds: IRound[]
  addReroll: () => void
  addPlusOne: () => void
  setIsMenuOpen: (value: boolean) => void
}

function Rounds({ rounds, addReroll, addPlusOne, setIsMenuOpen }: IProps) {
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
          action={() => onClickRound(index)}
          isChecked={checkedRoundsIndex.includes(index)}
          key={index}
          round={round}
        />
      ))}
      <SettingsButton onClick={() => setIsMenuOpen(true)}>?</SettingsButton>
    </Container>
  )
}

export default Rounds

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

const SettingsButton = styled.button`
  align-items: center;
  background-color: #444444;
  border-radius: 8px;
  border: solid 2px #ffffff;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font-size: calc(((100vh * 9 / 16 - 16px) / 11 - 8px) / 2);
  height: calc((100vh * 9 / 16 - 16px) / 11 - 8px);
  justify-content: center;
  padding: 4px;
  width: calc((100vh * 9 / 16 - 16px) / 11 - 8px);

  :hover {
    opacity: 0.7;
  }
`
