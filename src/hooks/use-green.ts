import { useState } from 'react'

import { BoxType, IBox } from '../types/types'

export interface IGreenData {
  boxes: IBox[]
  checkBox: () => void
  isFull: () => boolean
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

export function useGreen(): IGreenData {
  const [boxes, setBoxes] = useState<IBox[]>(boxesDefaultValues)

  function checkBox() {
    const _boxes = [...boxes]
    const item = _boxes.find((b) => !b.isChecked)

    if (item) {
      item.isChecked = true
    }

    setBoxes(_boxes)
  }

  function isFull() {
    return boxes.findIndex((b) => !b.isChecked ) === -1
  }

  return { boxes, checkBox, isFull }
}
