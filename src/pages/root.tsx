import React from 'react'
import styled from 'styled-components'
import Div100vh from 'react-div-100vh'

import { useRoot } from '../hooks/use-root'
import Bonus from '../components/bonus'
import DicePicker from '../components/common/dice-picker'
import { SectionColor } from '../types/types'
import Section from '../components/common/section'
import { blueRewards, yellowRewards } from '../types/section-defaults'
import { blueScores } from '../types/section-scores'
import Menu from '../components/menu'

function Root() {
  const {
    isDicePickerVisible,
    minimumDiceSelectable,
    yellowData,
    blueData,
    greenData,
    orangeData,
    purpleData,
    bonusData,
    totalScore,
    isMenuOpen,
    resetDicePicker,
    validateDicePicker,
    openDicePicker,
    addRowDice,
    addGreenDice,
    setIsMenuOpen,
    reset,
  } = useRoot()

  return (
    <Container>
      <Bonus
        data={bonusData}
        score={totalScore}
        setIsMenuOpen={setIsMenuOpen}
      />
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
      {isMenuOpen && <Menu close={() => setIsMenuOpen(false)} reset={reset} />}
    </Container>
  )
}

export default Root

const Container = styled(Div100vh)`
  align-items: center;
  background-color: #222222;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin: auto;
  padding: 8px 0;
  width: calc(100vh * 9 / 16);

  @media (orientation: portrait) {
    width: 100vw;
  }
`
