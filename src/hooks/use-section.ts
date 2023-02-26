import { useState } from 'react'
import { boxesDefault } from '../types/section-defaults'
import { blueScores, greenScores, yellowScores } from '../types/section-scores'
import { BoxType, IBox, SectionColor } from '../types/types'
import { COLUMN_COUNT, isColumnCompleted } from '../utils/grid'

export interface ISectionData {
  color: SectionColor
  boxes: IBox[]
  isFull: boolean
  score: number

  checkGridBox: (index: number) => void
  checkRowBox: () => void
  addRowBox: (dice: number) => void
  getLastDice: () => number
}

export function useSection(color: SectionColor): ISectionData {
  const [boxes, setBoxes] = useState<IBox[]>(boxesDefault[color])
  const [isFull, setIsFull] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)

  function checkGridBox(index: number) {
    if (color !== SectionColor.YELLOW && color !== SectionColor.BLUE) return
    if (index < 0 && index >= boxes.length) return

    const boxesClone = [...boxes]
    const emptyIndex = boxesClone.findIndex((b) => !b.isChecked)
    let score = 0

    boxesClone[index].isChecked = true

    if (color === SectionColor.BLUE) {
      const checkedCount = boxesClone.filter((b) => b.isChecked && b.type !== BoxType.EMPTY).length
      score = blueScores[checkedCount - 1]
    } else {
      score = getYellowScore()
    }

    setScore(score)
    setIsFull(emptyIndex === -1)
    setBoxes(boxesClone)
  }

  function checkRowBox() {
    if (color !== SectionColor.GREEN) return

    const boxesClone = [...boxes]
    const emptyIndex = boxesClone.findIndex((b) => !b.isChecked)

    if (emptyIndex !== -1) {
      boxesClone[emptyIndex].isChecked = true
    }

    const checkedCount = boxesClone.filter((b) => b.isChecked).length

    setScore(greenScores[checkedCount - 1])
    setIsFull(emptyIndex === -1 || emptyIndex === boxesClone.length - 1)
    setBoxes(boxesClone)
  }

  function addRowBox(dice: number) {
    if (color !== SectionColor.PURPLE && color !== SectionColor.ORANGE) return
    if (dice < 1 || dice > 6) return

    const boxesClone = [...boxes]
    const emptyIndex = boxesClone.findIndex((b) => b.value === 0)

    if (emptyIndex !== -1) {
      boxesClone[emptyIndex].value = dice * boxesClone[emptyIndex].multiplier
    }

    const score = boxesClone.reduce((acc, current) => acc + current.value, 0)

    setScore(score)
    setIsFull(emptyIndex === -1 || emptyIndex === boxesClone.length - 1)
    setBoxes(boxesClone)
  }

  function getLastDice(): number {
    if (color !== SectionColor.PURPLE) return 0

    const lastFilledBox = [...boxes].reverse().find((b) => b.value !== 0)
    return lastFilledBox?.value || 0
  }

  function getYellowScore(): number {
    let score = 0

    for (let i = 0; i < COLUMN_COUNT; i++) {
      if (isColumnCompleted(boxes, i)) {
        score += yellowScores[i]
      }
    }

    return score
  }

  return {
    color,
    boxes,
    isFull,
    score,
    checkGridBox,
    checkRowBox,
    addRowBox,
    getLastDice,
  }
}
