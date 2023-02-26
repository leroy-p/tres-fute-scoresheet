import React from "react";
import styled from "styled-components";

import { IBox } from "../../types/types";

interface IProps {
  box: IBox;
  multipler: number;
}

function Box({ box, multipler }: IProps) {
  return (
    <Container>
      {multipler > 1 && (
        <MultiplierText isHidden={box.value > 0 && multipler > 1}>
          x{multipler}
        </MultiplierText>
      )}
      {box.value > 0 && <ScoreText>{box.value}</ScoreText>}
      {box.isChecked && <ScoreText>X</ScoreText>}
    </Container>
  );
}

export default Box;

const Container = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  color: black;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: calc((100vh * 9 / 16 - 16px) / 11 - 8px);
  justify-content: center;
  position: relative;
  width: calc((100vh * 9 / 16 - 16px) / 11 - 8px);
`;

const ScoreText = styled.p`
  align-items: center;
  color: #000000;
  font-weight: bold;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

const MultiplierText = styled.p<{ isHidden: boolean }>`
  color: orange;
  opacity: ${({ isHidden }) => (isHidden ? "0.7" : "1")};
  font-weight: bold;
`;
