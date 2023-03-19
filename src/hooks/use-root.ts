import { useEffect, useState } from 'react'
import { SectionColor } from '../types/types'
import { useBonus } from './use-bonus'
import { useGameHistory } from './use-history'

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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const{ addHistoryItem, removeLastHistoryItem, lastHistoryItem, resetHistory } = useGameHistory()

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
      } else if (rerolls < rerollCount) {
        bonusData.removeLastReroll()
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
      } else if (plusOnes < plusOneCount) {
        bonusData.removeLastPlusOne()
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

    addHistoryItem({ color: origin || undefined, value })
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

    addHistoryItem({ color: origin, index })
  }

  function addGreenDice() {
    greenData.checkRowBox()
    addHistoryItem({ color: SectionColor.GREEN })
  }

  function undo() {
    if (!lastHistoryItem) return

    if (lastHistoryItem.color === SectionColor.YELLOW && lastHistoryItem.index !== undefined) {
      yellowData.unfillGridRowBox(lastHistoryItem.index)
    } else if (lastHistoryItem.color === SectionColor.BLUE && lastHistoryItem.index !== undefined) {
      blueData.unfillGridRowBox(lastHistoryItem.index)
    } else if (lastHistoryItem.color === SectionColor.GREEN) {
      greenData.unfillLastRowBox()
    } else if (lastHistoryItem.color === SectionColor.ORANGE) {
      orangeData.unfillLastRowBox()
    } else if (lastHistoryItem.color === SectionColor.PURPLE) {
      purpleData.unfillLastRowBox()
    }

    removeLastHistoryItem()
  }


  function reset() {
    yellowData.reset()
    blueData.reset()
    greenData.reset()
    orangeData.reset()
    purpleData.reset()
    bonusData.reset()
    setDicePickerVisible(false)
    setMinimumDiceSelectable(0)
    setOrigin(null)
    setTotalScore(0)
    setRerollCount(0)
    setPlusOneCount(9)
    resetHistory()
  }

  return {
    isDicePickerVisible,
    minimumDiceSelectable,
    yellowData,
    blueData,
    greenData,
    orangeData,
    purpleData,
    bonusData,
    origin,
    totalScore,
    isMenuOpen,
    resetDicePicker,
    validateDicePicker,
    openDicePicker,
    addRowDice,
    addGreenDice,
    setIsMenuOpen,
    undo,
    reset,
  }
}
