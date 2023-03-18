import { useEffect, useState } from 'react'
import { SectionColor } from '../types/types'
import { useBonus } from './use-bonus'

import { useSection } from './use-section'

export function useRoot() {
  const yellowData = useSection(SectionColor.YELLOW)
  const blueData = useSection(SectionColor.BLUE)
  const greenData = useSection(SectionColor.GREEN)
  const orangeData = useSection(SectionColor.ORANGE)
  const purpleData = useSection(SectionColor.PURPLE)
  const bonusData = useBonus()

  const [isDicePickerVisible, setDicePickerVisible] = useState<boolean>(false)
  const [minimumDiceSelectable, setMinimumDiceSelectable] = useState<number>(0)
  const [origin, setOrigin] = useState<SectionColor | null>(null)
  const [totalScore, setTotalScore] = useState<number>(0)
  const [rerollCount, setRerollCount] = useState<number>(0)
  const [plusOneCount, setPlusOneCount] = useState<number>(0)

  useEffect(() => {
    const foxCount =
      yellowData.foxCount +
      blueData.foxCount +
      greenData.foxCount +
      orangeData.foxCount +
      purpleData.foxCount
    const foxScore =
      Math.min(
        yellowData.score,
        blueData.score,
        greenData.score,
        orangeData.score,
        yellowData.score,
        purpleData.score
      ) * foxCount

    setTotalScore(
      yellowData.score +
        blueData.score +
        greenData.score +
        orangeData.score +
        purpleData.score +
        foxScore
    )
  }, [
    yellowData.score,
    blueData.score,
    greenData.score,
    orangeData.score,
    purpleData.score,
    yellowData.foxCount,
    blueData.foxCount,
    greenData.foxCount,
    orangeData.foxCount,
    purpleData.foxCount,
  ])

  useEffect(() => {
    const rerolls =
      yellowData.rerollCount +
      blueData.rerollCount +
      greenData.rerollCount +
      orangeData.rerollCount +
      purpleData.rerollCount

      if (rerolls > rerollCount) {
        for (let i = rerollCount; i < rerolls; i++) {
          bonusData.addReroll()
        }
      }

      setRerollCount(rerolls)
  }, [
    yellowData.rerollCount,
    blueData.rerollCount,
    greenData.rerollCount,
    orangeData.rerollCount,
    purpleData.rerollCount,
    bonusData,
    rerollCount,
  ])

  useEffect(() => {
    const plusOnes =
      yellowData.plusOneCount +
      blueData.plusOneCount +
      greenData.plusOneCount +
      orangeData.plusOneCount +
      purpleData.plusOneCount

      if (plusOnes > plusOneCount) {
        for (let i = plusOneCount; i < plusOnes; i++) {
          bonusData.addPlusOne()
        }
      }

      setPlusOneCount(plusOnes)
  }, [
    yellowData.plusOneCount,
    blueData.plusOneCount,
    greenData.plusOneCount,
    orangeData.plusOneCount,
    purpleData.plusOneCount,
    bonusData,
    plusOneCount,
  ])


  function resetDicePicker() {
    setDicePickerVisible(false)
    setOrigin(null)
  }

  function validateDicePicker(value: number) {
    setDicePickerVisible(false)

    if (origin === SectionColor.ORANGE) {
      orangeData.addRowBox(value)
    } else if (origin === SectionColor.PURPLE) {
      purpleData.addRowBox(value)
    }

    setOrigin(null)
  }

  function openDicePicker(origin: SectionColor) {
    let isVisible = false
    let minimum = 0

    if (origin === SectionColor.PURPLE) {
      const lastDice = purpleData.getLastDice()

      isVisible = !purpleData.isFull
      minimum = lastDice === 6 ? 0 : lastDice
    } else if (origin === SectionColor.ORANGE) {
      isVisible = !orangeData.isFull
    }

    setOrigin(origin)
    setMinimumDiceSelectable(minimum)
    setDicePickerVisible(isVisible)
  }

  function addRowDice(origin: SectionColor, index: number) {
    if (origin === SectionColor.YELLOW) {
      yellowData.checkGridBox(index)
    } else if (origin === SectionColor.BLUE) {
      blueData.checkGridBox(index)
    }
  }

  function addGreenDice() {
    greenData.checkRowBox()
  }

  return {
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
    origin,
    totalScore,
  }
}
