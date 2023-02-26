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
  position: absolute;
  top: 8px;
  right: 8px;
`
