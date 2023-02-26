export enum SectionColor {
  YELLOW = 'YELLOW',
  BLUE = 'BLUE',
  GREEN = 'GREEN',
  ORANGE = 'ORANGE',
  PURPLE = 'PURPLE',
}

export enum BoxType {
  CHECK = 'CHECK',
  NUMBER = 'NUMBER',
  EMPTY = 'EMPTY'
}

export interface IBox {
  type: BoxType
  isChecked: boolean
  value: number
  multiplier: number
}
