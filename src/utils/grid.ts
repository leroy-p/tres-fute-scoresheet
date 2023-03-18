import { IBox } from '../types/types'

export const COLUMN_COUNT = 4
export const YELLOW_ROW_COUNT = 4
export const BLUE_ROW_COUNT = 3

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
      console.log('false')

      return false
    }
  }

  console.log('true')
  return true
}
