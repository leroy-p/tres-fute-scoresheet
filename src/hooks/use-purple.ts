import { useState } from 'react'

import { BoxType, IBox } from '../types/types'

export interface IPurpleData {
  boxes: IBox[]
  addDice: (dice: number) => void
  isFull: () => boolean
  getLastDice: () => number
}

const boxDefaultValue: IBox = {
  type: BoxType.NUMBER,
  isChecked: false,
  value: 0,
  multiplier: 1,
}

const boxesDefaultValues = [
  { ...boxDefaultValue },
  { ...boxDefaultValue },
  { ...boxDefaultValue },
  { ...boxDefaultValue },
  { ...boxDefaultValue },
  { ...boxDefaultValue },
  { ...boxDefaultValue },
  { ...boxDefaultValue },
  { ...boxDefaultValue },
  { ...boxDefaultValue },
  { ...boxDefaultValue },
]

export function usePurple(): IPurpleData {
  const [boxes, setBoxes] = useState<IBox[]>(boxesDefaultValues)

  function addDice(dice: number) {
    if (dice < 1 || dice > 6) {
      return
    }

    const _boxes = [...boxes]
    const item = _boxes.find((b) => b.value === 0)

    if (item) {
      console.log(item.value)
      item.value = dice
    }

    setBoxes(_boxes)
  }

  function isFull() {
    return boxes.findIndex((b) => b.value === 0) === -1
  }

  function getLastDice() {
    const lastFilledBox = [...boxes].reverse().find((b) => b.value !== 0)

    return lastFilledBox?.value || 0
  }

  return { boxes, addDice, isFull, getLastDice }
}
