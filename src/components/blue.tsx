import React from 'react'
import { IBlueData } from '../hooks/use-blue'
import Box from './common/box'
import GridSection from './common/grid-section'

interface IProps {
  blueData: IBlueData
  clickEvent: (index: number) => void
}

function Blue({ blueData, clickEvent }: IProps) {
  const { boxes } = blueData

  return (
    <GridSection color="blue">
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

export default Blue
