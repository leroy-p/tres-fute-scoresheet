import { useState } from 'react'
import { SectionColor } from '../types/types'
import { IYellowData, useYellow } from './use-yellow'
import { IBlueData, useBlue } from './use-blue'
import { IGreenData, useGreen } from './use-green'
import { IOrangeData, useOrange } from './use-orange'
import { IPurpleData, usePurple } from './use-purple'

export interface IGameData {
  isDicePickerVisible: boolean

  resetDicePicker: () => void
  validateDicePicker: (value: number) => void
  openDicePicker: () => void
  minimumDiceSelectable: number
  addRowDice: (origin: SectionColor, index: number) => void
  addGreenDice: () => void

  yellowData: IYellowData
  blueData: IBlueData
  greenData: IGreenData
  orangeData: IOrangeData
  purpleData: IPurpleData
  origin: SectionColor
}

export function useRoot() {
  const yellowData = useYellow()
  const blueData = useBlue()
  const greenData = useGreen()
  const orangeData = useOrange()
  const purpleData = usePurple()

  const [isDicePickerVisible, setDicePickerVisible] = useState<boolean>(false)
  const [minimumDiceSelectable, setMinimumDiceSelectable] = useState<number>(0)
  const [origin, setOrigin] = useState<SectionColor | null>(null)

  function resetDicePicker() {
    setDicePickerVisible(false)
    setOrigin(null)
  }

  function validateDicePicker(value: number, section: SectionColor | null) {
    setDicePickerVisible(false)

    switch (section) {
      case SectionColor.ORANGE:
        orangeData.addDice(value)
        break
      case SectionColor.PURPLE:
        purpleData.addDice(value)
        break
      default:
        break
    }

    setOrigin(null)
  }

  function openDicePicker(origin: SectionColor) {
    let isVisible = false
    let minimum = 0

    if (origin === SectionColor.PURPLE) {
      const lastDice = purpleData.getLastDice()

      isVisible = !purpleData.isFull()
      minimum = lastDice === 6 ? 0 : lastDice
    } else if (origin === SectionColor.ORANGE) {
      isVisible = !orangeData.isFull()
    }

    setOrigin(origin)
    setMinimumDiceSelectable(minimum)
    setDicePickerVisible(isVisible)
  }


  function addRowDice(origin: SectionColor, index: number) {
    if (origin === SectionColor.YELLOW) {
      yellowData.checkBox(index)
    } else if (origin === SectionColor.BLUE) {
      blueData.checkBox(index)
    }
  }

  function addGreenDice() {
    greenData.checkBox()
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
  }
}
