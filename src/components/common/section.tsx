import React from 'react'
import { ISectionData } from '../../hooks/use-section'
import { SectionColor } from '../../types/types'
import Box from './box'
import GridSection from './grid-section'
import RowSection from './row-section'

interface IProps {
  data: ISectionData
  clickEvent: (index: number) => void
}

function Section({ data, clickEvent }: IProps) {
  const { boxes } = data

  if (data.color === SectionColor.YELLOW || data.color === SectionColor.BLUE) {
    return (
      <GridSection color={data.color.toLowerCase()} score={data.score}>
        <>
          {boxes.map((box, index) => (
            <Box
              clickEvent={() => clickEvent(index)}
              key={index}
              box={box}
              multipler={box.multiplier}
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
        score={data.score}
        clickEvent={() => clickEvent(0)}
        color={data.color.toLowerCase()}
        isPointer={!data.isFull}
      >
        <>
          {boxes.map((box, index) => (
            <Box key={index} box={box} multipler={box.multiplier} />
          ))}
        </>
      </RowSection>
    )
  }

  return <></>
}

export default Section
