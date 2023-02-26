import React from 'react'
import styled from 'styled-components'
import ScoreDisplayer from './score-displayer'

interface IProps {
  color: string
  children: JSX.Element
  clickEvent?: () => void
  score: number
}

function GridSection({ color, children, clickEvent, score }: IProps) {
  return (
    <Container color={color} onClick={clickEvent}>
      <div>{children}</div>
      <ScoreDisplayer score={score}/>
    </Container>
  )
}

export default GridSection

const Container = styled.div<{ color: string }>`
  align-items: center;
  border: ${({ color }) => `solid 2px ${color}`};
  display: flex;
  flex-direction: column;
  height: calc(100% / 3 - 8px);
  justify-content: center;
  position: relative;
  width: calc(50% - 12px);

  & > div {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    padding: 8px;
    width: 100%;
  }
`
