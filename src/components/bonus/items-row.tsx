import React from 'react'
import styled from 'styled-components'

import { BonusItemStatus, RewardType } from '../../types/types'
import Reward from '../common/reward'

interface IProps {
  items: BonusItemStatus[]
  isPointer: boolean
  type: RewardType
}

function ItemsRow({ items, isPointer, type }: IProps) {
  return (
    <Container isPointer={isPointer}>
      <TypeContainer>
        <Reward data={{ type }} />
      </TypeContainer>
      {items.map((item, index) => (
        <Item key={index}>
          {item === BonusItemStatus.READY && <p>/</p>}
          {item === BonusItemStatus.USED && <p>X</p>}
        </Item>
      ))}
    </Container>
  )
}

export default ItemsRow

const Container = styled.div<{ isPointer: boolean }>`
  align-items: center;
  border: solid 2px #ffffff;
  cursor: ${({ isPointer }) => (isPointer ? 'pointer' : 'auto')};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 8px;
  padding: 8px;
  width: 100%;
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
    font-size: calc(((100vw - 16px) / 11 - 8px) / 2);
    height: calc((100vw - 16px) / 11 - 8px);
    width: calc((100vw - 16px) / 11 - 8px);
  }

  & > p {
    color: black;
  }
`

const TypeContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc((100vh * 9 / 16 - 16px) / 11 - 8px);
  justify-content: center;
  width: calc((100vh * 9 / 16 - 16px) / 11 - 8px);

  @media (orientation: portrait) {
    height: calc((100vw - 16px) / 11 - 8px);
    width: calc((100vw - 16px) / 11 - 8px);
  }

`
