import { useEffect, useState } from 'react'
import { SectionColor } from '../types/types'

import { ISectionData, useSection } from './use-section'

export interface IGameData {
  isDicePickerVisible: boolean

  resetDicePicker: () => void
  validateDicePicker: (value: number) => void
  openDicePicker: () => void
  minimumDiceSelectable: number
  addRowDice: (origin: SectionColor, index: number) => void
  addGreenDice: () => void

  yellowData: ISectionData
  blueData: ISectionData
  greenData: ISectionData
  orangeData: ISectionData
  purpleData: ISectionData
  origin: SectionColor

  totalScore: number
}

export function useRoot() {
  const yellowData = useSection(SectionColor.YELLOW)
  const blueData = useSection(SectionColor.BLUE)
  const greenData = useSection(SectionColor.GREEN)
  const orangeData = useSection(SectionColor.ORANGE)
  const purpleData = useSection(SectionColor.PURPLE)

  const [isDicePickerVisible, setDicePickerVisible] = useState<boolean>(false)
  const [minimumDiceSelectable, setMinimumDiceSelectable] = useState<number>(0)
  const [origin, setOrigin] = useState<SectionColor | null>(null)
  const [totalScore, setTotalScore] = useState<number>(0)

  useEffect(() => {
    setTotalScore(
      yellowData.score +
        blueData.score +
        greenData.score +
        orangeData.score +
        purpleData.score
    )
  }, [
    yellowData.score,
    blueData.score,
    greenData.score,
    orangeData.score,
    purpleData.score,
  ])

  function resetDicePicker() {
    setDicePickerVisible(false)
    setOrigin(null)
  }

  function validateDicePicker(value: number, section: SectionColor | null) {
    setDicePickerVisible(false)

    if (section === SectionColor.ORANGE) {
      orangeData.addRowBox(value)
    } else if (section === SectionColor.PURPLE) {
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
    origin,
    totalScore,
  }
}
