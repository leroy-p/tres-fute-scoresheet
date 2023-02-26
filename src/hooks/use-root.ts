import { useState } from 'react'
import { SectionColor } from '../types/types'
import { IOrangeData, useOrange } from './use-orange'
import { IPurpleData, usePurple } from './use-purple'

export interface IGameData {
  isDicePickerVisible: boolean

  resetDicePicker: () => void
  validateDicePicker: (value: number) => void
  openDicePicker: () => void
  minimumDiceSelectable: number

  purpleData: IPurpleData
  orangeData: IOrangeData
  origin: SectionColor
}

export function useRoot() {
  const purpleData = usePurple()
  const orangeData = useOrange()

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
      case SectionColor.PURPLE:
        purpleData.addDice(value)
        break
      case SectionColor.ORANGE:
        orangeData.addDice(value)
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

  return {
    isDicePickerVisible,
    resetDicePicker,
    validateDicePicker,
    openDicePicker,
    minimumDiceSelectable,
    purpleData,
    orangeData,
    origin,
  }
}
