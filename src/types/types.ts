export enum SectionColor {
  YELLOW = 'YELLOW',
  BLUE = 'BLUE',
  GREEN = 'GREEN',
  ORANGE = 'ORANGE',
  PURPLE = 'PURPLE',
}

export enum SectionLayout {
  GRID = 'GRID',
  ROW = 'ROW',
}

export enum BoxType {
  CHECK = 'CHECK',
  NUMBER = 'NUMBER',
  EMPTY = 'EMPTY',
}

export enum BonusItemStatus {
  EMPTY = 'EMPTY',
  READY = 'READY',
  USED = 'USED',
}

export enum RewardType {
  DICE = 'DICE',
  FOX = 'FOX',
  REROLL = 'REROLL',
  PLUS_ONE = 'PLUS_ONE',
}

export interface IBox {
  type: BoxType
  isChecked: boolean
  value: number
  multiplier: number
}

export interface IReward {
  type: RewardType
  color?: SectionColor
  value?: number
}
