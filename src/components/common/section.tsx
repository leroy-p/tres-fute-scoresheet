import React from 'react'
import { useSection } from '../../hooks/use-section'
import { ISectionRewards, SectionColor } from '../../types/types'
import Box from './box'
import GridSection from './grid-section'
import RowSection from './row-section'

interface IProps {
  data: ReturnType<typeof useSection>
  isPurple?: boolean
  rewards?: ISectionRewards
  points?: number[]
  clickEvent: (index: number) => void
}

function Section({ data, isPurple, rewards, points, clickEvent }: IProps) {
  const { boxes } = data

  if (data.color === SectionColor.YELLOW || data.color === SectionColor.BLUE) {
    return (
      <GridSection
        color={data.color}
        points={points}
        rewards={rewards}
        score={data.score}
      >
        <>
          {boxes.map((box, index) => (
            <Box
              color={data.color}
              box={box}
              clickEvent={() => clickEvent(index)}
              index={index}
              isPurple={isPurple}
              key={index}
            />
          ))}
        </>
      </GridSection>
    )
  }

  if (
    data.color === SectionColor.GREEN ||
    data.color === SectionColor.ORANGE ||
    data.color === SectionColor.PURPLE
  ) {
    return (
      <RowSection
        color={data.color}
        score={data.score}
        clickEvent={() => clickEvent(0)}
        isPointer={!data.isFull}
      >
        <>
          {boxes.map((box, index) => (
            <Box
              box={box}
              color={data.color}
              index={index}
              key={index}
              isPurple={isPurple}
            />
          ))}
        </>
      </RowSection>
    )
  }

  return <></>
}

export default Section
