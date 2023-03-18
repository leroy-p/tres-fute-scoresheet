import React from 'react'
import styled from 'styled-components'
import Dice from '../components/dices/dice'

import { TurnMode, useDices } from '../hooks/use-dices'

function Dices() {
  const {
    availableDices,
    selectedDices,
    throwedDices,
    currentMode,
    throwDices,
    pickDice,
    resetDices,
  } = useDices()

  return (
    <Container>
      <p>{currentMode}</p>
      <SelectedDicesContainer>
        <p>Selected dices: </p>
        {selectedDices &&
          selectedDices.map((selectedDice) => (
            <Dice
              color={selectedDice.color}
              key={selectedDice.color}
              value={selectedDice.value}
            />
          ))}
      </SelectedDicesContainer>
      <AvailableDicesContainer>
        {availableDices &&
          availableDices.map((throwedDice, index) => (
            <Dice
              color={throwedDice.color}
              key={throwedDice.color}
              value={throwedDice.value}
              onClick={
                currentMode === TurnMode.PICK
                  ? () => pickDice(index)
                  : undefined
              }
            />
          ))}
      </AvailableDicesContainer>
      <ThrowedDicesContainer>
        <p>Throwed dices: </p>
        {throwedDices &&
          throwedDices.map((throwedDice) => (
            <Dice
              color={throwedDice.color}
              key={throwedDice.color}
              value={throwedDice.value}
            />
          ))}
      </ThrowedDicesContainer>
      <ActionsContainer>
        {currentMode !== TurnMode.END ? (
          <Button onClick={throwDices}>
            {currentMode === TurnMode.PICK ? 'Reroll' : 'Throw'}
          </Button>
        ) : (
          <Button onClick={resetDices}>Reset</Button>
        )}
      </ActionsContainer>
    </Container>
  )
}

export default Dices

const Container = styled.div`
  align-items: center;
  background-color: #222222;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: center;
  gap: 8px;
  margin: auto;
  width: calc(100vh * 9 / 16);
`

const SelectedDicesContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 20%;
  justify-content: center;
  gap: 16px;
  width: 100%;
`

const AvailableDicesContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 30%;
  justify-content: center;
  gap: 16px;
  width: 100%;
`

const ThrowedDicesContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 20%;
  justify-content: center;
  gap: 16px;
  width: 100%;
`

const ActionsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 10%;
  justify-content: center;
  gap: 16px;
  width: 100%;
`

const Button = styled.button`
  border: solid 1px #ffffff;
  color: #ffffff;
  height: 100%;
  padding: 0 8px;
  height: 48px;
  text-transform: uppercase;
  width: 200px;
`
