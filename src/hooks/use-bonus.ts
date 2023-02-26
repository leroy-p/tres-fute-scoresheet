import { useState } from 'react'
import { IBonusItemStatus } from '../types/types'

export interface IBonusData {
  plusOneItems: IBonusItemStatus[]
  rerollItems: IBonusItemStatus[]

  hasPlusOneAvailable: boolean
  hasRerollAvailable: boolean

  addPlusOne: () => void
  usePlusOne: () => void
  addReroll: () => void
  useReroll: () => void
}

export function useBonus(): IBonusData {
  const [hasPlusOneAvailable, setHasPlusOneAvailable] = useState<boolean>(false)
  const [hasRerollAvailable, setHasRerollAvailable] = useState<boolean>(false)

  const [plusOneItems, setPlusOneItems] = useState<IBonusItemStatus[]>(
    Array(7).fill(IBonusItemStatus.EMPTY)
  )
  const [rerollItems, setRerollItems] = useState<IBonusItemStatus[]>(
    Array(7).fill(IBonusItemStatus.EMPTY)
  )

  function addPlusOne() {
    const plusOneItemsClone = [...plusOneItems]
    const emptyIndex = plusOneItemsClone.findIndex(
      (i) => i === IBonusItemStatus.EMPTY
    )

    if (emptyIndex !== -1) {
      plusOneItemsClone[emptyIndex] = IBonusItemStatus.READY
    }

    setHasPlusOneAvailable(emptyIndex !== -1)
    setPlusOneItems(plusOneItemsClone)
  }

  function usePlusOne() {
    const plusOneItemsClone = [...plusOneItems]
    const index = plusOneItemsClone.findIndex(
      (i) => i === IBonusItemStatus.READY
    )

    if (index !== -1) {
      plusOneItemsClone[index] = IBonusItemStatus.USED
    }

    const readyIndex = plusOneItemsClone.findIndex(
      (i) => i === IBonusItemStatus.READY
    )

    setHasPlusOneAvailable(readyIndex !== -1)
    setPlusOneItems(plusOneItemsClone)
  }

  function addReroll() {
    const rerollItemsClone = [...rerollItems]
    const emptyIndex = rerollItemsClone.findIndex(
      (i) => i === IBonusItemStatus.EMPTY
    )

    if (emptyIndex !== -1) {
      rerollItemsClone[emptyIndex] = IBonusItemStatus.READY
    }

    setHasRerollAvailable(emptyIndex !== -1)
    setRerollItems(rerollItemsClone)
  }

  function useReroll() {
    const rerollItemsClone = [...rerollItems]
    const index = rerollItemsClone.findIndex(
      (i) => i === IBonusItemStatus.READY
    )

    if (index !== -1) {
      rerollItemsClone[index] = IBonusItemStatus.USED
    }

    const readyIndex = rerollItemsClone.findIndex(
      (i) => i === IBonusItemStatus.READY
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
