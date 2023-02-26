import { BoxType, IBox, SectionColor } from './types'

const yellowBoxDefault: IBox = {
  type: BoxType.CHECK,
  isChecked: false,
  value: 0,
  multiplier: 1,
}

const yellowDefault = [
  { ...yellowBoxDefault, value: 3 },
  { ...yellowBoxDefault, value: 6 },
  { ...yellowBoxDefault, value: 5 },
  { ...yellowBoxDefault, value: 0, isChecked: true },
  { ...yellowBoxDefault, value: 2 },
  { ...yellowBoxDefault, value: 1 },
  { ...yellowBoxDefault, value: 0, isChecked: true },
  { ...yellowBoxDefault, value: 5 },
  { ...yellowBoxDefault, value: 1 },
  { ...yellowBoxDefault, value: 0, isChecked: true },
  { ...yellowBoxDefault, value: 2 },
  { ...yellowBoxDefault, value: 4 },
  { ...yellowBoxDefault, value: 0, isChecked: true },
  { ...yellowBoxDefault, value: 3 },
  { ...yellowBoxDefault, value: 4 },
  { ...yellowBoxDefault, value: 6 },
]

const blueBoxDefault: IBox = {
  type: BoxType.CHECK,
  isChecked: false,
  value: 0,
  multiplier: 1,
}

const blueDefault = [
  { ...blueBoxDefault, type: BoxType.EMPTY, isChecked: true },
  { ...blueBoxDefault, value: 2 },
  { ...blueBoxDefault, value: 3 },
  { ...blueBoxDefault, value: 4 },
  { ...blueBoxDefault, value: 5 },
  { ...blueBoxDefault, value: 6 },
  { ...blueBoxDefault, value: 7 },
  { ...blueBoxDefault, value: 8 },
  { ...blueBoxDefault, value: 9 },
  { ...blueBoxDefault, value: 10 },
  { ...blueBoxDefault, value: 11 },
  { ...blueBoxDefault, value: 12 },
]

const greenBoxDefault: IBox = {
  type: BoxType.CHECK,
  isChecked: false,
  value: 0,
  multiplier: 1,
}

const greenDefault = [
  { ...greenBoxDefault },
  { ...greenBoxDefault },
  { ...greenBoxDefault },
  { ...greenBoxDefault },
  { ...greenBoxDefault },
  { ...greenBoxDefault },
  { ...greenBoxDefault },
  { ...greenBoxDefault },
  { ...greenBoxDefault },
  { ...greenBoxDefault },
  { ...greenBoxDefault },
]

const orangeBoxDefault: IBox = {
  type: BoxType.NUMBER,
  isChecked: false,
  value: 0,
  multiplier: 1,
}

const orangeDefault = [
  { ...orangeBoxDefault },
  { ...orangeBoxDefault },
  { ...orangeBoxDefault },
  { ...orangeBoxDefault, multiplier: 2 },
  { ...orangeBoxDefault },
  { ...orangeBoxDefault },
  { ...orangeBoxDefault, multiplier: 2 },
  { ...orangeBoxDefault },
  { ...orangeBoxDefault, multiplier: 2 },
  { ...orangeBoxDefault },
  { ...orangeBoxDefault, multiplier: 3 },
]

const purpleBoxDefault: IBox = {
  type: BoxType.NUMBER,
  isChecked: false,
  value: 0,
  multiplier: 1,
}

const purpleDefault = [
  { ...purpleBoxDefault },
  { ...purpleBoxDefault },
  { ...purpleBoxDefault },
  { ...purpleBoxDefault },
  { ...purpleBoxDefault },
  { ...purpleBoxDefault },
  { ...purpleBoxDefault },
  { ...purpleBoxDefault },
  { ...purpleBoxDefault },
  { ...purpleBoxDefault },
  { ...purpleBoxDefault },
]

export const boxesDefault: { [key: string]: IBox[] } = {
  [SectionColor.YELLOW]: yellowDefault,
  [SectionColor.BLUE]: blueDefault,
  [SectionColor.GREEN]: greenDefault,
  [SectionColor.ORANGE]: orangeDefault,
  [SectionColor.PURPLE]: purpleDefault,
}
