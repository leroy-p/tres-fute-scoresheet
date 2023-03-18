import React from 'react'
import styled from 'styled-components'

import { useRoot } from '../hooks/use-root'
import Bonus from '../components/bonus'
import DicePicker from '../components/common/dice-picker'
import { SectionColor } from '../types/types'
import Section from '../components/common/section'
import {
  blueRewards,
  yellowRewards,
} from '../types/section-defaults'
import { blueScores } from '../types/section-scores'

function Root() {
  const {
    isDicePickerVisible,
    resetDicePicker,
    validateDicePicker,
    openDicePicker,
    minimumDiceSelectable,
    addRowDice,
    addGreenDice,
    yellowData,
    blueData,
    greenData,
    orangeData,
    purpleData,
    bonusData,
    totalScore,
  } = useRoot()

  return (
    <Container>
      <Bonus data={bonusData} score={totalScore} />
      <Section
        data={yellowData}
        clickEvent={(index) => addRowDice(SectionColor.YELLOW, index)}
        rewards={yellowRewards}
      />
      <Section
        data={blueData}
        clickEvent={(index) => addRowDice(SectionColor.BLUE, index)}
        rewards={blueRewards}
        points={blueScores}
      />
      <Section data={greenData} clickEvent={addGreenDice} />
      <Section
        data={orangeData}
        clickEvent={() => openDicePicker(SectionColor.ORANGE)}
      />
      <Section
        isPurple
        data={purpleData}
        clickEvent={() => openDicePicker(SectionColor.PURPLE)}
      />
      {isDicePickerVisible && (
        <DicePicker
          close={resetDicePicker}
          selectDiceEvent={(dice) => validateDicePicker(dice)}
          minimumDice={minimumDiceSelectable}
        />
      )}
    </Container>
  )
}

export default Root

const Container = styled.div`
  align-items: center;
  background-color: #222222;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: center;
  gap: 8px;
  margin: auto;
  padding: 8px 0;
  width: calc(100vh * 9 / 16);

  @media (orientation: portrait) {
    height: 100vh;
    width: 100vw;
  }
`
