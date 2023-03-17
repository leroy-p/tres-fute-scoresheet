import React from 'react'
import styled from 'styled-components'

interface IProps {
  score: number
}

function ScoreDisplayer({ score }: IProps) {
  return <Container>Score: {score}</Container>
}

export default ScoreDisplayer

const Container = styled.p`
  font-size: 12px;
  position: absolute;
  right: 2px;
  top: 2px;
`
