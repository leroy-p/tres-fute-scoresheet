import React from "react";
import styled from "styled-components";

interface IProps {
  fillBox: (value: number) => void;
  close: () => void;
}

const values = [1, 2, 3, 4, 5, 6];

function NumberPicker({ fillBox, close }: IProps) {
  return (
    <Container onClick={close}>
      <div onClick={(event) => event.stopPropagation()}>
        {values.map((value, index) => (
          <Button onClick={() => fillBox(value)}>{value}</Button>
        ))}
      </div>
    </Container>
  );
}

export default NumberPicker;

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

const Button = styled.div`
  align-items: center;
  background-color: #222222;
  display: flex;
  flex-direction: column;
  height: 64px;
  justify-content: center;
  width: 64px;
`;
