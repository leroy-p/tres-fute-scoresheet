import { useState } from 'react'
import { SectionColor } from '../types/types'

export enum TurnMode {
  START = 'START',
  THROW = 'THROW',
  PICK = 'PICK',
  END = 'END',
}

interface IDice {
    value: number
    color: SectionColor
}

export function useDices() {
  const [availableDices, setAvailableDices] = useState<IDice[]>([
    { value: 6, color: SectionColor.YELLOW },
    { value: 6, color: SectionColor.BLUE },
    { value: 6, color: SectionColor.GREEN },
    { value: 6, color: SectionColor.ORANGE },
    { value: 6, color: SectionColor.PURPLE },
    { value: 6, color: SectionColor.WHITE },
  ])
  const [selectedDices, setSelectedDices] = useState<IDice[]>([])
  const [throwedDices, setThrowedDices] = useState<IDice[]>([])
  const [currentMode, setCurrentMode] = useState<TurnMode>(TurnMode.START)

  function throwDices() {
    const dices = [...availableDices]

    for (const dice of dices) {
        dice.value = Math.floor(Math.random() * 6 + 1)
    }

    setAvailableDices(dices)
    setCurrentMode(TurnMode.PICK)
  }

  function pickDice(diceIndex: number) {
    const dice = availableDices[diceIndex]

    if (!dice) return

    const availableDicesClone: IDice[] = []
    const selectedDicesClone = [...selectedDices]
    const throwedDicesClone = [...throwedDices]

    for (let i = 0 ; i < availableDices.length; i++) {
        if  (i !== diceIndex && (availableDices[i].value < dice.value || selectedDicesClone.length === 2)) {
            throwedDicesClone.push({ ...availableDices[i] })
        } else if (i !== diceIndex) {
            availableDicesClone.push({ ...availableDices[i] })
        }
    }

    selectedDicesClone.push({ ...dice })

    setAvailableDices(availableDicesClone)
    setSelectedDices(selectedDicesClone)
    setThrowedDices(throwedDicesClone)
    setCurrentMode(availableDicesClone.length === 0 ? TurnMode.END : TurnMode.THROW)
  }

  function resetDices() {
    setAvailableDices([
      { value: 6, color: SectionColor.YELLOW },
      { value: 6, color: SectionColor.BLUE },
      { value: 6, color: SectionColor.GREEN },
      { value: 6, color: SectionColor.ORANGE },
      { value: 6, color: SectionColor.PURPLE },
      { value: 6, color: SectionColor.WHITE },
    ])
    setSelectedDices([])
    setThrowedDices([])
    setCurrentMode(TurnMode.START)
  }

  return { availableDices, selectedDices, throwedDices, currentMode, throwDices, pickDice, resetDices }
}
