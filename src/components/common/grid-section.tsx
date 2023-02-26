import React from 'react'
import styled from 'styled-components'

interface IProps {
  color: string
  children: JSX.Element
  clickEvent?: () => void
}

function GridSection({ color, children, clickEvent }: IProps) {
  return (
    <Container color={color} onClick={clickEvent}>
      <div>{children}</div>
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
