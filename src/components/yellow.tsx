import React from 'react'
import { IYellowData } from '../hooks/use-yellow'
import Box from './common/box'
import GridSection from './common/grid-section'

interface IProps {
  yellowData: IYellowData
  clickEvent: (index: number) => void
}

function Yellow({ yellowData, clickEvent }: IProps) {
  const { boxes } = yellowData

  return (
    <GridSection color="yellow">
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

export default Yellow
