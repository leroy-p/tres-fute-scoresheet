import React from 'react'
import styled from 'styled-components'

import Bonus from '../components/bonus'
import Yellow from '../components/yellow'
import Blue from '../components/blue'
import Green from '../components/green'
import Orange from '../components/orange'
import Purple from '../components/purple'

function Root() {
  return (
    <Container>
      <Bonus />
      <Yellow />
      <Blue />
      <Green />
      <Orange />
      <Purple />
    </Container>
  )
}

export default Root

const Container = styled.div`
  align-items: flex-start;
  background-color: #222222;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: center;
  gap: 8px;
  margin: auto;
  padding: 8px 0;
  width: calc(100vh * 9 / 16);

  @media screen and (max-width: 1248px) {
    height: calc(100vw * 16 / 9);
    width: 100%;
  }
`