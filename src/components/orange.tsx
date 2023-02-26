import React from 'react'
import { IOrangeData } from '../hooks/use-orange'
import Box from './common/box'
import RowSection from './common/row-section'

interface IProps {
  orangeData: IOrangeData
  clickEvent: () => void
}

function Orange({ orangeData, clickEvent }: IProps) {
  const { boxes } = orangeData

  return (
    <RowSection
      clickEvent={clickEvent}
      color="orange"
      isPointer={boxes.findIndex((b) => b.value === 0) !== -1}
    >
      <>
        {boxes.map((box, index) => (
          <Box key={index} box={box} multipler={box.multiplier} />
        ))}
      </>
    </RowSection>
  )
}

export default Orange
