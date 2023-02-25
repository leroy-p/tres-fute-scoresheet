import { useState } from 'react'

import { BoxType, IBox } from '../types/types'

interface IPurpleData {
  boxes: IBox[]
  fillBox: (index: number, value: number) => void
  selectedBoxIndex: number | null
  setSelectedBoxIndex: (value: number | null) => void
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

export function usePurple(): IPurpleData {
  const [boxes, setBoxes] = useState<IBox[]>(boxesDefaultValues)
  const [selectedBoxIndex, setSelectedBoxIndex] = useState<number | null>(null)

  function fillBox(index: number, value: number) {
    const _boxes = [...boxes]

    if (
      index < 0 ||
      index >= boxesDefaultValues.length ||
      value < 1 ||
      value > 6
    ) {
      return
    }

    _boxes[index].isChecked = true
    _boxes[index].value = value

    setBoxes(_boxes)
  }

  return { boxes, fillBox, selectedBoxIndex, setSelectedBoxIndex }
}
