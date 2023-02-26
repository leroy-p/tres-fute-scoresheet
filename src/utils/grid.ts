import { IBox } from '../types/types'

export const COLUMN_COUNT = 4

export function isColumnCompleted(boxes: IBox[], index: number): boolean {
  for (let i = index; i < boxes.length; i += COLUMN_COUNT) {
    if (!boxes[i].isChecked) {
      return false
    }
  }

  return true
}

export function isRowCompleted(boxes: IBox[], index: number): boolean {
  const startIndex = index * COLUMN_COUNT

  for (let i = startIndex; i < startIndex + COLUMN_COUNT; i++) {
    if (i >= boxes.length) break

    if (!boxes[i].isChecked) {
      return false
    }
  }

  return true
}
