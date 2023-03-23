import React from 'react'
import styled from 'styled-components'

import foxImage from '../../assets/images/icon-raccoon.png'

interface IProps {
  yellowScore: number
  blueScore: number
  greenScore: number
  orangeScore: number
  purpleScore: number
  totalScore: number
  foxCount: number
  close: () => void
}

function Menu({
  yellowScore,
  blueScore,
  greenScore,
  orangeScore,
  purpleScore,
  totalScore,
  foxCount,
  close,
}: IProps) {
  const minSectionScore = Math.min(
    yellowScore,
    blueScore,
    greenScore,
    orangeScore,
    purpleScore,
    totalScore
  )

  return (
    <Container onClick={close}>
      <div onClick={(event) => event.stopPropagation()}>
        <h6>Score</h6>
        <ScoresContainer>
          <div>
            <p></p>
            <p className="yellow">{yellowScore}</p>
          </div>
          <div>
            <p>+</p>
            <p className="blue">{blueScore}</p>
          </div>
          <div>
            <p>+</p>
            <p className="green">{greenScore}</p>
          </div>
          <div>
            <p>+</p>
            <p className="orange">{orangeScore}</p>
          </div>
          <div>
            <p>+</p>
            <p className="purple">{purpleScore}</p>
          </div>
          <div>
            <p>+</p>
            <div>
              <img alt="" src={foxImage} />
              <p>{`${foxCount} x ${minSectionScore}`}</p>
            </div>
          </div>
          <Separator />
          <div>
            <p>=</p>
            <p className="total-score">{totalScore}</p>
          </div>
        </ScoresContainer>
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
      font-size: 32px;
      font-weight: bold;
      margin: 0 0 48px 0;
    }
  }
`

const ScoresContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  & > div {
    align-items: center;
    display: flex;
    flex-direction: row;
    font-size: 24px;
    justify-content: space-between;
    width: calc(100% - 48px);

    & > p {
      font-size: 24px;
    }

    .yellow {
      color: #ffefa1;
      font-weight: bold;
    }

    .blue {
      color: #82b8f9;
      font-weight: bold;
    }

    .green {
      color: #79d8b6;
      font-weight: bold;
    }

    .orange {
      color: #fcad77;
      font-weight: bold;
    }

    .purple {
      color: #c697dd;
      font-weight: bold;
    }

    .total-score {
      color: #ffffff;
      font-weight: bold;
      font-size: 32px;
    }

    & > div {
      align-items: center;
      display: flex;
      flex-direction: row;
      font-size: 24px;
      justify-content: center;
      gap: 8px;

      & > p {
        color: #b0A99f;
        font-size: 24px;
      }

      & > img {
        height: 24px;
        width: 24px;
      }
    }
  }
`

const Separator = styled.div`
  background-color: #ffffff;
  height: 2px;
  margin: 8px 0;
  width: calc(100% - 96px);
`
