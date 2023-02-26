import { useState } from 'react'
import { BoxType, IBox } from '../types/types'
import { IPurpleData } from './use-purple'

export interface IOrangeData {
  boxes: IBox[]
  addDice: (dice: number) => void
  isFull: () => boolean
}

const boxDefaultValue: IBox = {
  type: BoxType.NUMBER,
  isChecked: false,
  value: 0,
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

export function useOrange(): IOrangeData {
  const [boxes, setBoxes] = useState<IBox[]>(boxesDefaultValues)

  function addDice(dice: number) {
    if (dice < 1 || dice > 6) {
      return
    }

    const _boxes = [...boxes]
    const item = _boxes.find((b) => b.value === 0)

    if (item) {
      item.value = dice
    }

    setBoxes(_boxes)
  }

  function isFull() {
    return boxes.findIndex((b) => b.value === 0) === -1
  }

  return { boxes, addDice, isFull }
}
