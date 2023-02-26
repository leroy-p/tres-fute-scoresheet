import React from 'react'
import styled from 'styled-components'

import { useRoot } from '../hooks/use-root'
import Bonus from '../components/bonus'
import DicePicker from '../components/common/dice-picker'
import { SectionColor } from '../types/types'
import Section from '../components/common/section'

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
    origin,
    totalScore,
  } = useRoot()

  return (
    <Container>
      <Bonus score={totalScore} />
      <Section
        data={yellowData}
        clickEvent={(index) => addRowDice(SectionColor.YELLOW, index)}
      />
      <Section
        data={blueData}
        clickEvent={(index) => addRowDice(SectionColor.BLUE, index)}
      />
      <Section data={greenData} clickEvent={addGreenDice} />
      <Section
        data={orangeData}
        clickEvent={() => openDicePicker(SectionColor.ORANGE)}
      />
      <Section
        data={purpleData}
        clickEvent={() => openDicePicker(SectionColor.PURPLE)}
      />
      {isDicePickerVisible && (
        <DicePicker
          close={resetDicePicker}
          selectDiceEvent={(dice) => validateDicePicker(dice, origin)}
          minimumDice={minimumDiceSelectable}
        />
      )}
    </Container>
  )
}

export default Root

const Container = styled.div`
  align-items: flex-start;
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
`
