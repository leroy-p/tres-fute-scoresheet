import { useState } from 'react'

import { BoxType, IBox } from '../types/types'

export interface IBlueData {
  boxes: IBox[]
  checkBox: (index: number) => void
}

const boxDefaultValue: IBox = {
  type: BoxType.CHECK,
  isChecked: false,
  value: 0,
  multiplier: 1,
}

const boxesDefaultValues = [
  { ...boxDefaultValue, type: BoxType.EMPTY },
  { ...boxDefaultValue, value: 2 },
  { ...boxDefaultValue, value: 3 },
  { ...boxDefaultValue, value: 4 },
  { ...boxDefaultValue, value: 5 },
  { ...boxDefaultValue, value: 6 },
  { ...boxDefaultValue, value: 7 },
  { ...boxDefaultValue, value: 8 },
  { ...boxDefaultValue, value: 9 },
  { ...boxDefaultValue, value: 10 },
  { ...boxDefaultValue, value: 11 },
  { ...boxDefaultValue, value: 12 },
]

export function useBlue(): IBlueData {
  const [boxes, setBoxes] = useState<IBox[]>(boxesDefaultValues)

  function checkBox(index: number) {
    if (index < 0 && index >= boxes.length) return

    const _boxes = [...boxes]

    _boxes[index].isChecked = true
    setBoxes(_boxes)
  }

  return { boxes, checkBox }
}
