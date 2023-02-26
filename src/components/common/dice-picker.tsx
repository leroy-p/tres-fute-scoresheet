import React from "react";
import styled from "styled-components";

interface IProps {
  selectDiceEvent: (value: number) => void
  close: () => void
  minimumDice: number
}

const values = [1, 2, 3, 4, 5, 6];

function DicePicker({ selectDiceEvent, close, minimumDice }: IProps) {
  console.log(minimumDice)

  return (
    <Container onClick={close}>
      <div onClick={(event) => event.stopPropagation()}>
        {values.map((value, index) => (
          <Button isDisabled={minimumDice >= value} key={index} onClick={() => selectDiceEvent(value)}>
            {value}
          </Button>
        ))}
      </div>
    </Container>
  );
}

export default DicePicker;

const Container = styled.div<{ isLoading?: boolean }>`
  align-items: center;
  background-color: #000000aa;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  pointer-events: ${({ isLoading }) => (isLoading ? "none" : "auto")};
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 20;

  & > div {
    align-items: center;
    background-color: #444444;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    padding: 24px;
    width: 300px;

    @media screen and (max-width: 588px) {
      width: calc(100% - 48px);
    }
  }
`;

const Button = styled.button<{ isDisabled: boolean }>`
  align-items: center;
  background-color: #222222;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 64px;
  justify-content: center;
  opacity: ${({ isDisabled }) => isDisabled ? '0.7' : '1'};
  pointer-events: ${({ isDisabled }) => isDisabled ? 'none' : 'auto'};
  width: 64px;
`;
