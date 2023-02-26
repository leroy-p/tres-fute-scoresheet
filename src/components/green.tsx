import React from 'react'
import { IGreenData } from '../hooks/use-green'
import Box from './common/box'
import RowSection from './common/row-section'

interface IProps {
  greenData: IGreenData
  clickEvent: () => void
}

function Green({ greenData, clickEvent }: IProps) {
  const { boxes } = greenData

  return (
    <RowSection
      clickEvent={clickEvent}
      color="green"
      isPointer={!greenData.isFull()}
    >
      <>
        {boxes.map((box, index) => (
          <Box key={index} box={box} multipler={box.multiplier} />
        ))}
      </>
    </RowSection>
  )
}

export default Green
