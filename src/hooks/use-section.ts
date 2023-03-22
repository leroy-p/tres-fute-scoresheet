import { useState } from 'react'
import {
  blueRewards,
  boxesDefault,
  yellowRewards,
} from '../types/section-defaults'
import { blueScores, greenScores } from '../types/section-scores'
import {
  BoxType,
  IBox,
  IReward,
  RewardType,
  SectionColor,
} from '../types/types'
import {
  BLUE_ROW_COUNT,
  COLUMN_COUNT,
  isColumnCompleted,
  isDiagonalCompleted,
  isRowCompleted,
  YELLOW_ROW_COUNT,
} from '../utils/grid'

export function useSection(color: SectionColor) {
  const [boxes, setBoxes] = useState<IBox[]>([...boxesDefault[color]])
  const [isFull, setIsFull] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)
  const [rerollCount, setRerollCount] = useState<number>(0)
  const [plusOneCount, setPlusOneCount] = useState<number>(0)
  const [foxCount, setFoxCount] = useState<number>(0)

  function checkGridBox(index: number): IReward[] {
    if (color !== SectionColor.YELLOW && color !== SectionColor.BLUE) return []
    if (index < 0 && index >= boxes.length) return []

    let diceRewards: IReward[] = []
    const boxesClone = [...boxes]
    const emptyIndex = boxesClone.findIndex((b) => !b.isChecked)
    let score = 0
    let rerolls = 0
    let plusOnes = 0
    let foxes = 0

    boxesClone[index].isChecked = true
    boxesClone[index].isFilled = true

    if (color === SectionColor.BLUE) {
      const checkedCount = boxesClone.filter(
        (b) => b.isChecked && b.type !== BoxType.EMPTY
      ).length
      const blueRewards = getBlueRewards(index)

      score = blueScores[checkedCount - 1]
      rerolls = blueRewards.rerollCount
      plusOnes = blueRewards.plusOneCount
      foxes = blueRewards.foxCount
      diceRewards = [...blueRewards.diceRewards]
    } else {
      const yellowRewards = getYellowScoreAndRewards(index)

      score = yellowRewards.score
      rerolls = yellowRewards.rerollCount
      plusOnes = yellowRewards.plusOneCount
      foxes = yellowRewards.foxCount
      diceRewards = [...yellowRewards.diceRewards]
    }

    setScore(score)
    setRerollCount(rerolls)
    setPlusOneCount(plusOnes)
    setFoxCount(foxes)
    setIsFull(emptyIndex === -1)
    setBoxes(boxesClone)

    return diceRewards
  }

  function checkRowBox(): IReward[] {
    if (color !== SectionColor.GREEN) return []

    const boxesClone = [...boxes]
    const emptyIndex = boxesClone.findIndex((b) => !b.isChecked)

    if (emptyIndex !== -1) {
      boxesClone[emptyIndex].isChecked = true
      boxesClone[emptyIndex].isFilled = true
    }

    const checkedCount = boxesClone.filter((b) => b.isChecked).length
    const rerolls = boxesClone.reduce(
      (acc, current) =>
        current.isChecked && current.reward?.type === RewardType.REROLL
          ? acc + 1
          : acc,
      0
    )
    const plusOnes = boxesClone.reduce(
      (acc, current) =>
        current.isChecked && current.reward?.type === RewardType.PLUS_ONE
          ? acc + 1
          : acc,
      0
    )
    const foxes = boxesClone.reduce(
      (acc, current) =>
        current.isChecked && current.reward?.type === RewardType.FOX
          ? acc + 1
          : acc,
      0
    )

    setScore(greenScores[checkedCount - 1])
    setIsFull(emptyIndex === -1 || emptyIndex === boxesClone.length - 1)
    setBoxes(boxesClone)
    setRerollCount(rerolls)
    setPlusOneCount(plusOnes)
    setFoxCount(foxes)

    return emptyIndex !== -1 &&
      boxesClone[emptyIndex].reward?.type === RewardType.DICE
      ? ([boxesClone[emptyIndex].reward] as IReward[])
      : []
  }

  function addRowBox(dice: number): IReward[] {
    if (color !== SectionColor.PURPLE && color !== SectionColor.ORANGE)
      return []
    if (dice < 1 || dice > 6) return []

    const boxesClone = [...boxes]
    const emptyIndex = boxesClone.findIndex((b) => b.value === 0)

    if (emptyIndex !== -1) {
      boxesClone[emptyIndex].value = dice * boxesClone[emptyIndex].multiplier
      boxesClone[emptyIndex].isFilled = true
    }

    const score = boxesClone.reduce((acc, current) => acc + current.value, 0)
    const rerolls = boxesClone.reduce(
      (acc, current) =>
        current.value > 0 && current.reward?.type === RewardType.REROLL
          ? acc + 1
          : acc,
      0
    )
    const plusOnes = boxesClone.reduce(
      (acc, current) =>
        current.value > 0 && current.reward?.type === RewardType.PLUS_ONE
          ? acc + 1
          : acc,
      0
    )
    const foxes = boxesClone.reduce(
      (acc, current) =>
        current.value > 0 && current.reward?.type === RewardType.FOX
          ? acc + 1
          : acc,
      0
    )

    setScore(score)
    setIsFull(emptyIndex === -1 || emptyIndex === boxesClone.length - 1)
    setBoxes(boxesClone)
    setRerollCount(rerolls)
    setPlusOneCount(plusOnes)
    setFoxCount(foxes)

    return emptyIndex !== -1 &&
      boxesClone[emptyIndex].reward?.type === RewardType.DICE
      ? ([boxesClone[emptyIndex].reward] as IReward[])
      : []
  }

  function getLastDice(): number {
    if (color !== SectionColor.PURPLE) return 0

    const lastFilledBox = [...boxes].reverse().find((b) => b.value !== 0)
    return lastFilledBox?.value || 0
  }

  function getYellowScoreAndRewards(lastChechedIndex?: number): {
    score: number
    rerollCount: number
    plusOneCount: number
    foxCount: number
    diceRewards: IReward[]
  } {
    let score = 0
    let rerolls = 0
    let plusOnes = 0
    let foxes = 0
    let diceRewards: IReward[] = []

    for (let i = 0; i < YELLOW_ROW_COUNT; i++) {
      if (isRowCompleted(boxes, i)) {
        if (yellowRewards.rows[i]?.reward?.type === RewardType.REROLL) {
          rerolls += 1
        } else if (
          yellowRewards.rows[i]?.reward?.type === RewardType.PLUS_ONE
        ) {
          plusOnes += 1
        } else if (yellowRewards.rows[i]?.reward?.type === RewardType.FOX) {
          foxes += 1
        }

        if (
          lastChechedIndex !== undefined &&
          Math.floor(lastChechedIndex / COLUMN_COUNT) === i &&
          yellowRewards.rows[i].reward &&
          yellowRewards.rows[i].reward?.type === RewardType.DICE
        ) {
          diceRewards.push(yellowRewards.rows[i].reward as IReward)
        }
      }
    }

    for (let i = 0; i < COLUMN_COUNT; i++) {
      if (isColumnCompleted(boxes, i)) {
        score += yellowRewards.columns[i]?.points || 0
      }
    }

    if (isDiagonalCompleted(boxes)) {
      if (yellowRewards.diagonal?.reward?.type === RewardType.REROLL) {
        rerolls += 1
      } else if (yellowRewards.diagonal?.reward?.type === RewardType.PLUS_ONE) {
        plusOnes += 1
      } else if (yellowRewards.diagonal?.reward?.type === RewardType.FOX) {
        foxes += 1
      }
    }

    return {
      score,
      rerollCount: rerolls,
      plusOneCount: plusOnes,
      foxCount: foxes,
      diceRewards,
    }
  }

  function getBlueRewards(lastChechedIndex?: number): {
    rerollCount: number
    plusOneCount: number
    foxCount: number
    diceRewards: IReward[]
  } {
    let rerolls = 0
    let plusOnes = 0
    let foxes = 0
    let diceRewards: IReward[] = []

    for (let i = 0; i < BLUE_ROW_COUNT; i++) {
      if (isRowCompleted(boxes, i)) {
        if (blueRewards.rows[i]?.reward?.type === RewardType.REROLL) {
          rerolls += 1
        } else if (blueRewards.rows[i]?.reward?.type === RewardType.PLUS_ONE) {
          plusOnes += 1
        } else if (blueRewards.rows[i]?.reward?.type === RewardType.FOX) {
          foxes += 1
        }

        if (
          lastChechedIndex !== undefined &&
          Math.floor(lastChechedIndex / COLUMN_COUNT) === i &&
          blueRewards.rows[i].reward &&
          blueRewards.rows[i].reward?.type === RewardType.DICE
        ) {
          diceRewards.push(blueRewards.rows[i].reward as IReward)
        }
      }
    }

    for (let i = 0; i < COLUMN_COUNT; i++) {
      if (isColumnCompleted(boxes, i)) {
        if (blueRewards.columns[i]?.reward?.type === RewardType.REROLL) {
          rerolls += 1
        } else if (
          blueRewards.columns[i]?.reward?.type === RewardType.PLUS_ONE
        ) {
          plusOnes += 1
        } else if (blueRewards.columns[i]?.reward?.type === RewardType.FOX) {
          foxes += 1
        }

        if (
          lastChechedIndex !== undefined &&
          lastChechedIndex % COLUMN_COUNT === i &&
          blueRewards.columns[i].reward &&
          blueRewards.columns[i].reward?.type === RewardType.DICE
        ) {
          diceRewards.push(blueRewards.columns[i].reward as IReward)
        }
      }
    }

    return {
      rerollCount: rerolls,
      plusOneCount: plusOnes,
      foxCount: foxes,
      diceRewards,
    }
  }

  function unfillGridRowBox(index: number) {
    if (color !== SectionColor.YELLOW && color !== SectionColor.BLUE) return
    if (index < 0 && index >= boxes.length) return

    const boxesClone = [...boxes]
    let score = 0
    let rerolls = 0
    let plusOnes = 0
    let foxes = 0

    boxesClone[index].isChecked = false
    boxesClone[index].isFilled = false

    if (color === SectionColor.BLUE) {
      const checkedCount = boxesClone.filter(
        (b) => b.isChecked && b.type !== BoxType.EMPTY
      ).length
      const blueRewards = getBlueRewards()

      score = checkedCount === 0 ? 0 : blueScores[checkedCount - 1]
      rerolls = blueRewards.rerollCount
      plusOnes = blueRewards.plusOneCount
      foxes = blueRewards.foxCount
    } else {
      const yellowRewards = getYellowScoreAndRewards()

      score = yellowRewards.score
      rerolls = yellowRewards.rerollCount
      plusOnes = yellowRewards.plusOneCount
      foxes = yellowRewards.foxCount
    }

    setScore(score)
    setRerollCount(rerolls)
    setPlusOneCount(plusOnes)
    setFoxCount(foxes)
    setIsFull(false)
    setBoxes(boxesClone)
  }

  function unfillLastRowBox() {
    const boxesClone = [...boxes]
    const emptyIndex = boxesClone.findIndex((b) => !b.isFilled)
    let checkedCount = 0
    let score = 0

    if (emptyIndex === -1) {
      boxesClone[boxesClone.length - 1].isFilled = false
      boxesClone[boxesClone.length - 1].isChecked = false
      boxesClone[boxesClone.length - 1].value = 0
      checkedCount = boxesClone.length - 1
    } else if (emptyIndex > 0) {
      boxesClone[emptyIndex - 1].isFilled = false
      boxesClone[emptyIndex - 1].isChecked = false
      boxesClone[emptyIndex - 1].value = 0
      checkedCount = emptyIndex - 1
    }

    if (color === SectionColor.GREEN) {
      score = checkedCount === 0 ? 0 : greenScores[checkedCount - 1]
    } else {
      score = boxesClone.reduce((acc, current) => acc + current.value, 0)
    }

    const rerolls = boxesClone.reduce(
      (acc, current) =>
        current.value > 0 && current.reward?.type === RewardType.REROLL
          ? acc + 1
          : acc,
      0
    )
    const plusOnes = boxesClone.reduce(
      (acc, current) =>
        current.value > 0 && current.reward?.type === RewardType.PLUS_ONE
          ? acc + 1
          : acc,
      0
    )
    const foxes = boxesClone.reduce(
      (acc, current) =>
        current.value > 0 && current.reward?.type === RewardType.FOX
          ? acc + 1
          : acc,
      0
    )

    setScore(score)
    setIsFull(false)
    setBoxes(boxesClone)
    setRerollCount(rerolls)
    setPlusOneCount(plusOnes)
    setFoxCount(foxes)
  }

  function reset() {
    const boxes: IBox[] = []

    for (const box of boxesDefault[color]) {
      boxes.push({ ...box, isChecked: box.isCheckedByDefault })
    }

    setBoxes(boxes)
    setIsFull(false)
    setScore(0)
    setRerollCount(0)
    setPlusOneCount(0)
    setFoxCount(0)
  }

  return {
    color,
    boxes,
    isFull,
    score,
    rerollCount,
    plusOneCount,
    foxCount,
    checkGridBox,
    checkRowBox,
    addRowBox,
    getLastDice,
    reset,
    unfillGridRowBox,
    unfillLastRowBox,
  }
}
