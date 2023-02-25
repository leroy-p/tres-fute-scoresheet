import { useState } from 'react'

export interface IGameData {
  showNumberPicker: boolean
  setShowNumberPicker: (value: boolean) => void
}

export function useGame() {
  const [showNumberPicker, setShowNumberPicker] = useState<boolean>(false)

  return { showNumberPicker, setShowNumberPicker }
}
