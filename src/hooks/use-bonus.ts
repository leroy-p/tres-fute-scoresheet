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

  function removeLastPlusOne() {
    const plusOneItemsClone = [...plusOneItems]
    const emptyIndex = plusOneItemsClone.findIndex(
      (i) => i === BonusItemStatus.EMPTY
    )

    if (emptyIndex === -1) {
      plusOneItemsClone[plusOneItemsClone.length - 1] = BonusItemStatus.EMPTY
    } else if (emptyIndex > 0) {
      plusOneItemsClone[emptyIndex - 1] = BonusItemStatus.EMPTY
    }

    setHasPlusOneAvailable(
      plusOneItemsClone.findIndex((i) => i === BonusItemStatus.READY) !== -1
    )
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


  function removeLastReroll() {
    const rerollItemsClone = [...rerollItems]
    const emptyIndex = rerollItemsClone.findIndex(
      (i) => i === BonusItemStatus.EMPTY
    )

    if (emptyIndex === -1) {
      rerollItemsClone[rerollItemsClone.length - 1] = BonusItemStatus.EMPTY
    } else if (emptyIndex > 0) {
      rerollItemsClone[emptyIndex - 1] = BonusItemStatus.EMPTY
    }

    setHasRerollAvailable(
      rerollItemsClone.findIndex((i) => i === BonusItemStatus.READY) !== -1
    )
    setRerollItems(rerollItemsClone)
  }

  function useReroll() {
    const rerollItemsClone = [...rerollItems]
    const index = rerollItemsClone.findIndex((i) => i === BonusItemStatus.READY)

    if (index !== -1) {
      rerollItemsClone[index] = BonusItemStatus.USED
    }

    const readyIndex = rerollItemsClone.findIndex(
      (i) => i === BonusItemStatus.READY
    )

    setHasRerollAvailable(readyIndex !== -1)
    setRerollItems(rerollItemsClone)
  }

  function reset() {
    setHasPlusOneAvailable(false)
    setHasRerollAvailable(false)
    setPlusOneItems(Array(7).fill(BonusItemStatus.EMPTY))
    setRerollItems(Array(7).fill(BonusItemStatus.EMPTY))
  }

  return {
    plusOneItems,
    rerollItems,
    addPlusOne,
    removeLastPlusOne,
    usePlusOne,
    addReroll,
    removeLastReroll,
    useReroll,
    hasPlusOneAvailable,
    hasRerollAvailable,
    reset,
  }
}
