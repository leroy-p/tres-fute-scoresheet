import { useState } from 'react'
import { IHistoryItem } from '../types/types'

export function useGameHistory() {
  const [gameHistory, setGameHistory] = useState<IHistoryItem[]>([])

  function addHistoryItem(item: IHistoryItem) {
    setGameHistory([...gameHistory, item])
  }

  function removeLastHistoryItem() {
    const historyClone = [...gameHistory]

    if (gameHistory.length >= 0) {
        historyClone.pop()
    }

    setGameHistory(historyClone)
  }

  function resetHistory() {
    setGameHistory([])
  }

  return {
    gameHistory,
    lastHistoryItem:
    gameHistory.length > 0 ? gameHistory[gameHistory.length - 1] : undefined,
    isHistoryEmpty: gameHistory.length === 0,
    addHistoryItem,
    removeLastHistoryItem,
    resetHistory,
  }
}
