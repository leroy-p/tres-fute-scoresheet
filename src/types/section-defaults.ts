import { BoxType, IBox, IReward, ISectionRewards, RewardType, SectionColor } from './types'

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
  { ...greenBoxDefault, higherThan: 1, points: 1 },
  { ...greenBoxDefault, higherThan: 2, points: 3 },
  { ...greenBoxDefault, higherThan: 3, points: 6 },
  { ...greenBoxDefault, higherThan: 4, reward: { type: RewardType.PLUS_ONE }, points: 10 },
  { ...greenBoxDefault, higherThan: 5, points: 15 },
  {
    ...greenBoxDefault,
    higherThan: 1,
    reward: { type: RewardType.DICE, color: SectionColor.BLUE },
    points: 21,
  },
  { ...greenBoxDefault, higherThan: 2, reward: { type: RewardType.FOX }, points: 28 },
  { ...greenBoxDefault, higherThan: 3, points: 36 },
  {
    ...greenBoxDefault,
    higherThan: 4,
    reward: { type: RewardType.DICE, color: SectionColor.PURPLE, value: 6 },
    points: 45,
  },
  { ...greenBoxDefault, higherThan: 5, reward: { type: RewardType.REROLL }, points: 55 },
  { ...greenBoxDefault, higherThan: 6, points: 66 },
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
  { ...orangeBoxDefault, reward: { type: RewardType.REROLL } },
  { ...orangeBoxDefault, multiplier: 2 },
  {
    ...orangeBoxDefault,
    reward: { type: RewardType.DICE, color: SectionColor.YELLOW },
  },
  { ...orangeBoxDefault, reward: { type: RewardType.PLUS_ONE } },
  { ...orangeBoxDefault, multiplier: 2 },
  { ...orangeBoxDefault, reward: { type: RewardType.FOX } },
  { ...orangeBoxDefault, multiplier: 2 },
  {
    ...orangeBoxDefault,
    reward: { type: RewardType.DICE, color: SectionColor.PURPLE, value: 6 },
  },
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
  { ...purpleBoxDefault, reward: { type: RewardType.REROLL } },
  {
    ...purpleBoxDefault,
    reward: { type: RewardType.DICE, color: SectionColor.BLUE },
  },
  { ...purpleBoxDefault, reward: { type: RewardType.PLUS_ONE } },
  {
    ...purpleBoxDefault,
    reward: { type: RewardType.DICE, color: SectionColor.YELLOW },
  },
  { ...purpleBoxDefault, reward: { type: RewardType.FOX } },
  { ...purpleBoxDefault, reward: { type: RewardType.REROLL } },
  {
    ...purpleBoxDefault,
    reward: { type: RewardType.DICE, color: SectionColor.GREEN },
  },
  {
    ...purpleBoxDefault,
    reward: { type: RewardType.DICE, color: SectionColor.ORANGE, value: 6 },
  },
  { ...purpleBoxDefault, reward: { type: RewardType.PLUS_ONE } },
]

export const boxesDefault: { [key: string]: IBox[] } = {
  [SectionColor.YELLOW]: yellowDefault,
  [SectionColor.BLUE]: blueDefault,
  [SectionColor.GREEN]: greenDefault,
  [SectionColor.ORANGE]: orangeDefault,
  [SectionColor.PURPLE]: purpleDefault,
}

export const yellowRewards: ISectionRewards = {
  rows: [
    { reward: { type: RewardType.DICE, color: SectionColor.BLUE } },
    { reward: { type: RewardType.DICE, color: SectionColor.ORANGE, value: 4 } },
    { reward: { type: RewardType.DICE, color: SectionColor.GREEN } },
    { reward: { type: RewardType.FOX } },
  ],
  columns: [
    { points: 10 },
    { points: 14 },
    { points: 16 },
    { points: 20 },
  ],
  diagonal: { reward: { type: RewardType.PLUS_ONE } },
}

export const blueRewards: ISectionRewards = {
  rows: [
    { reward: { type: RewardType.DICE, color: SectionColor.ORANGE, value: 5 } },
    { reward: { type: RewardType.DICE, color: SectionColor.YELLOW } },
    { reward: { type: RewardType.FOX } },
  ],
  columns: [
    { reward: { type: RewardType.REROLL } },
    { reward: { type: RewardType.DICE, color: SectionColor.GREEN } },
    { reward: { type: RewardType.DICE, color: SectionColor.PURPLE, value: 6 } },
    { reward: { type: RewardType.PLUS_ONE } },
  ],
}

export const bluePoints = [1, 2, 4, 7, 11, 16, 22, 29, 37, 46, 56]