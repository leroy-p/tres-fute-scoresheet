import { IReward, RewardType, SectionColor } from './types'

export const yellowRewards: IReward[] = [
  { type: RewardType.DICE, color: SectionColor.BLUE },
  { type: RewardType.DICE, color: SectionColor.ORANGE, value: 4 },
  { type: RewardType.DICE, color: SectionColor.GREEN },
  { type: RewardType.FOX },
  { type: RewardType.PLUS_ONE },
]

export const blueRewards: IReward[] = [
  { type: RewardType.DICE, color: SectionColor.ORANGE, value: 5 },
  { type: RewardType.DICE, color: SectionColor.YELLOW },
  { type: RewardType.FOX },

  { type: RewardType.REROLL },
  { type: RewardType.DICE, color: SectionColor.GREEN },
  { type: RewardType.DICE, color: SectionColor.PURPLE, value: 6 },
  { type: RewardType.PLUS_ONE },
]
