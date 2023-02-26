import React from 'react'
import { IPurpleData } from '../hooks/use-purple'
import Box from './common/box'
import RowSection from './common/row-section'

interface IProps {
  purpleData: IPurpleData
  clickEvent: () => void
}

function Purple({ purpleData, clickEvent }: IProps) {
  const { boxes } = purpleData

  return (
    <RowSection
      clickEvent={clickEvent}
      color="purple"
      isPointer={!purpleData.isFull()}
    >
      <>
        {boxes.map((box, index) => (
          <Box key={index} box={box} multipler={box.multiplier} />
        ))}
      </>
    </RowSection>
  )
}

export default Purple
