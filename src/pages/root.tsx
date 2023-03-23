import React from 'react'
import styled from 'styled-components'
import Div100vh from 'react-div-100vh'

import { useRoot } from '../hooks/use-root'
import Bonus from '../components/bonus/bonus'
import DicePicker from '../components/common/dice-picker'
import { SectionColor } from '../types/types'
import Section from '../components/common/section'
import { blueRewards, yellowRewards } from '../types/section-defaults'
import { blueScores } from '../types/section-scores'
import Menu from '../components/menu'
import Score from '../components/common/score'

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
    isScoreOpen,
    highlightedSection,
    foxCount,
    resetDicePicker,
    validateDicePicker,
    openDicePicker,
    addRowDice,
    addGreenDice,
    setIsMenuOpen,
    setIsScoreOpen,
    undo,
    reset,
  } = useRoot()

  return (
    <Container>
      <Bonus
        data={bonusData}
        isDisabled={highlightedSection !== null}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Section
        data={yellowData}
        clickEvent={(index) => addRowDice(SectionColor.YELLOW, index)}
        isDisabled={
          highlightedSection !== null &&
          highlightedSection !== SectionColor.YELLOW
        }
        rewards={yellowRewards}
      />
      <Section
        data={blueData}
        clickEvent={(index) => addRowDice(SectionColor.BLUE, index)}
        isDisabled={
          highlightedSection !== null &&
          highlightedSection !== SectionColor.BLUE
        }
        rewards={blueRewards}
        points={blueScores}
      />
      <Section
        data={greenData}
        clickEvent={addGreenDice}
        isDisabled={
          highlightedSection !== null &&
          highlightedSection !== SectionColor.GREEN
        }
      />
      <Section
        data={orangeData}
        clickEvent={() => openDicePicker(SectionColor.ORANGE)}
        isDisabled={
          highlightedSection !== null &&
          highlightedSection !== SectionColor.ORANGE
        }
      />
      <Section
        isPurple
        data={purpleData}
        clickEvent={() => openDicePicker(SectionColor.PURPLE)}
        isDisabled={
          highlightedSection !== null &&
          highlightedSection !== SectionColor.PURPLE
        }
      />
      {isDicePickerVisible && (
        <DicePicker
          close={resetDicePicker}
          selectDiceEvent={(dice) => validateDicePicker(dice)}
          minimumDice={minimumDiceSelectable}
        />
      )}
      {isMenuOpen && (
        <Menu
          close={() => setIsMenuOpen(false)}
          reset={reset}
          showScore={() => setIsScoreOpen(true)}
          undo={undo}
        />
      )}
      {isScoreOpen && (
        <Score
          close={() => setIsScoreOpen(false)}
          blueScore={blueData.score}
          greenScore={greenData.score}
          orangeScore={orangeData.score}
          purpleScore={purpleData.score}
          totalScore={totalScore}
          yellowScore={yellowData.score}
          foxCount={foxCount}
        />
      )}
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
