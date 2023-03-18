import { useState } from 'react'
import { BonusItemStatus } from '../types/types'

export function useBonus() {
  const [hasPlusOneAvailable, setHasPlusOneAvailable] = useState<boolean>(false)
  const [hasRerollAvailable, setHasRerollAvailable] = useState<boolean>(false)

  const [plusOneItems, setPlusOneItems] = useState<BonusItemStatus[]>(
    Array(7).fill(BonusItemStatus.EMPTY)
  )
  const [rerollItems, setRerollItems] = useState<BonusItemStatus[]>(
    Array(7).fill(BonusItemStatus.EMPTY)
  )

  function addPlusOne() {
    const plusOneItemsClone = [...plusOneItems]
    const emptyIndex = plusOneItemsClone.findIndex(
      (i) => i === BonusItemStatus.EMPTY
    )

    if (emptyIndex !== -1) {
      plusOneItemsClone[emptyIndex] = BonusItemStatus.READY
    }

    setHasPlusOneAvailable(emptyIndex !== -1)
    setPlusOneItems(plusOneItemsClone)
  }

  function usePlusOne() {
    const plusOneItemsClone = [...plusOneItems]
    const index = plusOneItemsClone.findIndex(
      (i) => i === BonusItemStatus.READY
    )

    if (index !== -1) {
      plusOneItemsClone[index] = BonusItemStatus.USED
    }

    const readyIndex = plusOneItemsClone.findIndex(
      (i) => i === BonusItemStatus.READY
    )

    setHasPlusOneAvailable(readyIndex !== -1)
    setPlusOneItems(plusOneItemsClone)
  }

  function addReroll() {
    const rerollItemsClone = [...rerollItems]
    const emptyIndex = rerollItemsClone.findIndex(
      (i) => i === BonusItemStatus.EMPTY
    )

    if (emptyIndex !== -1) {
      rerollItemsClone[emptyIndex] = BonusItemStatus.READY
    }

    setHasRerollAvailable(emptyIndex !== -1)
    setRerollItems(rerollItemsClone)
  }

  function useReroll() {
    const rerollItemsClone = [...rerollItems]
    const index = rerollItemsClone.findIndex(
      (i) => i === BonusItemStatus.READY
    )

    if (index !== -1) {
      rerollItemsClone[index] = BonusItemStatus.USED
    }

    const readyIndex = rerollItemsClone.findIndex(
      (i) => i === BonusItemStatus.READY
    )

    setHasPlusOneAvailable(readyIndex !== -1)
    setRerollItems(rerollItemsClone)
  }

  return {
    plusOneItems,
    rerollItems,
    addPlusOne,
    usePlusOne,
    addReroll,
    useReroll,
    hasPlusOneAvailable,
    hasRerollAvailable,
  }
}
