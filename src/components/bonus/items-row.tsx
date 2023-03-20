import React from 'react'
import styled from 'styled-components'

import { BonusItemStatus, RewardType } from '../../types/types'
import Reward from '../common/reward'

interface IProps {
  items: BonusItemStatus[]
  isPointer: boolean
  type: RewardType
  useAction: () => void
}

function ItemsRow({ items, isPointer, type, useAction }: IProps) {
  return (
    <Container isPointer={isPointer}>
      <div>
        <TypeContainer>
          <Reward data={{ type }} />
        </TypeContainer>
        {items.map((item, index) => (
          <Item key={index}>
            {item === BonusItemStatus.READY && <p>/</p>}
            {item === BonusItemStatus.USED && <p>X</p>}
          </Item>
        ))}
      </div>
      <button onClick={useAction}>use</button>
    </Container>
  )
}

export default ItemsRow

const Container = styled.div<{ isPointer: boolean }>`
  align-items: center;
  border: solid 2px #ffffff;
  border-radius: 12px;
  cursor: ${({ isPointer }) => (isPointer ? 'pointer' : 'auto')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  width: 100%;

  & > div {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 8px;
  }

  & > button {
    background-color: #444444;
    color: #ffffff;
    border: solid 1px #ffffff;
    border-radius: 8px;
    padding: 8px;
    text-transform: uppercase;

    :hover {
      opacity: 0.7;
    }
  }
`

const Item = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font-size: calc(((100vh * 9 / 16 - 16px) / 11 - 8px) / 2);
  height: calc((100vh * 9 / 16 - 16px) / 11 - 8px);
  justify-content: center;
  width: calc((100vh * 9 / 16 - 16px) / 11 - 8px);

  @media (orientation: portrait) {
    height: calc((100vw - 16px) / 11 - 8px);
    width: calc((100vw - 16px) / 11 - 8px);

    & > p {
      font-size: calc(((100vw - 16px) / 11 - 8px));
    }
  }

  & > p {
    font-size: calc(((100vh * 9 / 16 - 16px) / 11 - 8px));
    color: black;
    font-weight: bold;
  }
`

const TypeContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: calc((((100vh * 9 / 16 - 16px) / 11 - 8px)) / 2);
  height: calc((100vh * 9 / 16 - 16px) / 11 - 8px);
  justify-content: center;
  width: calc((100vh * 9 / 16 - 16px) / 11 - 8px);

  & > div > p {
    font-size: calc(((100vw - 16px) / 11 - 8px) / 8);
  }

  @media (orientation: portrait) {
    height: calc((100vw - 16px) / 11 - 8px);
    width: calc((100vw - 16px) / 11 - 8px);

    & > div > p {
      font-size: calc(((100vw - 16px) / 11 - 8px) / 2);
    }
  }
`
