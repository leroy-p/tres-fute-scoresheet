import React from 'react'
import styled from 'styled-components'

interface IProps {
  close: () => void
  reset: () => void
}

function Menu({ close, reset }: IProps) {
  function onReset() {
    reset()
    close()
  }

  return (
    <Container onClick={close}>
      <div onClick={(event) => event.stopPropagation()}>
        <h6>Menu</h6>
        <Button onClick={onReset}>Reset</Button>
        <Button onClick={close}>
          <a href="/dices" target="_blank">
            Dices
          </a>
        </Button>
      </div>
    </Container>
  )
}

export default Menu

const Container = styled.div<{ isLoading?: boolean }>`
  align-items: center;
  background-color: #000000aa;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  pointer-events: ${({ isLoading }) => (isLoading ? 'none' : 'auto')};
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 20;

  & > div {
    align-items: center;
    background-color: #444444;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    padding: 24px;
    width: 300px;

    & > h6 {
      color: #ffffff;
      font-size: 24px;
      font-weight: bold;
      margin: 0 0 48px 0;
    }
  }
`

const Button = styled.button`
  background-color: #222222;
  color: #ffffff;
  height: 64px;
  width: 100%;

  & > a {
    color: #ffffff;
    text-decoration: none;
  }

  :hover {
    opacity: 0.7;
  }
`
