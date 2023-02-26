import React from 'react'
import styled from 'styled-components'

import { useRoot } from '../hooks/use-root'
import Bonus from '../components/bonus'
import Blue from '../components/blue'
import Orange from '../components/orange'
import Purple from '../components/purple'
import DicePicker from '../components/common/dice-picker'
import { SectionColor } from '../types/types'
import Green from '../components/green'
import Yellow from '../components/yellow'

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
  } = useRoot()

  return (
    <Container>
      <Bonus />
      <Yellow
        yellowData={yellowData}
        clickEvent={(index) => addRowDice(SectionColor.YELLOW, index)}
      />
      <Blue
        blueData={blueData}
        clickEvent={(index) => addRowDice(SectionColor.BLUE, index)}
      />
      <Green greenData={greenData} clickEvent={addGreenDice} />
      <Orange
        orangeData={orangeData}
        clickEvent={() => openDicePicker(SectionColor.ORANGE)}
      />
      <Purple
        purpleData={purpleData}
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
