import React from "react";
import styled from "styled-components";

interface IProps {
  color: string;
  children: JSX.Element;
  clickEvent: () => void;
  isPointer: boolean;
}

function RowSection({ color, children, clickEvent, isPointer }: IProps) {
  return (
    <Container color={color} isPointer={isPointer} onClick={clickEvent}>
      {children}
    </Container>
  );
}

export default RowSection;

const Container = styled.div<{ isPointer: boolean; color: string }>`
  align-items: center;
  border: ${({ color }) => `solid 2px ${color}`};
  cursor: ${({ isPointer }) => (isPointer ? "pointer" : "auto")};
  display: flex;
  flex-direction: row;
  height: calc(100% / 9 - 8px);
  justify-content: space-between;
  padding: 8px;
  width: calc(100% - 16px);
`;
