import React from 'react'
import styled from 'styled-components'
import { ISectionRewards, SectionColor } from '../../types/types'
import Points from './points'
import Reward from './reward'
import SectionScoresTable from './section-scores-table'

interface IProps {
  color: SectionColor
  children: JSX.Element
  rewards?: ISectionRewards
  points?: number[]
  isDisabled?: boolean
  clickEvent?: () => void
}

function GridSection({
  color,
  children,
  rewards,
  points,
  isDisabled,
  clickEvent,
}: IProps) {
  return (
    <Container color={color} isDisabled={isDisabled} onClick={clickEvent}>
      <MainContainer>
        {points && <SectionScoresTable points={points} color={color} />}
        <TopContainer>
          <GridContainer>{children}</GridContainer>
          <RowRewardsContainer>
            {rewards &&
              rewards.rows.map(({ reward, points }, index) => (
                <RewardContainer key={index}>
                  {reward && <Reward data={reward} />}
                  {points && <Points color={color} value={points} />}
                </RewardContainer>
              ))}
          </RowRewardsContainer>
        </TopContainer>
        <BottomContainer>
          <ColumnRewardsContainer>
            {rewards &&
              rewards.columns.map(({ reward, points }, index) => (
                <RewardContainer key={index}>
                  {reward && <Reward data={reward} />}
                  {points && <Points color={color} value={points} />}
                </RewardContainer>
              ))}
          </ColumnRewardsContainer>
          <RewardContainer>
            {rewards?.diagonal?.reward && (
              <Reward data={rewards.diagonal.reward} />
            )}
            {rewards?.diagonal?.points && (
              <Points color={color} value={rewards.diagonal.points} />
            )}
          </RewardContainer>
        </BottomContainer>
      </MainContainer>
    </Container>
  )
}

export default GridSection

const Container = styled.div<{ isDisabled?: boolean; color: SectionColor }>`
  align-items: center;
  border: ${({ color }) => {
    if (color === SectionColor.YELLOW) return 'solid 2px #ffefa1'
    if (color === SectionColor.BLUE) return 'solid 2px #82b8f9'
    if (color === SectionColor.GREEN) return 'solid 2px #79d8b6'
    if (color === SectionColor.ORANGE) return 'solid 2px #fcad77'
    if (color === SectionColor.PURPLE) return 'solid 2px #c697dd'
    if (color === SectionColor.WHITE) return 'solid 2px #ffffff'

    return 'solid 2px #000000';
  }};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: calc(100% / 3 - 8px);
  justify-content: center;
  opacity: ${({ isDisabled }) => isDisabled ? '0.3' : '1'};
  pointer-events: ${({ isDisabled }) => isDisabled ? 'none' : 'auto'};
  position: relative;
  width: calc(50% - 12px);
`

const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  gap: 8px;
  width: 100%;
`

const TopContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 8px;
  width: 100%;
`

const BottomContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 8px;
  margin-top: 4px;
  width: 100%;
`

const GridContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
  width: 87.5%;
`

const RowRewardsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`

const ColumnRewardsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
`

const RewardContainer = styled.div`
  align-items: center;
  display: flex;
  height: calc((100vh * 9 / 16 - 16px) / 11 - 8px);
  justify-content: center;
  width: calc((100vh * 9 / 16 - 16px) / 11 - 8px);

  @media (orientation: portrait) {
    height: calc((100vw - 16px) / 11 - 8px);
    width: calc((100vw - 16px) / 11 - 8px);
  }

  & > div {
    height: 65%;
    width: 65%;

    & > p {
      font-size: calc(((100vh * 9 / 16 - 16px) / 11 - 8px) / 3);

      @media (orientation: portrait) {
        font-size: calc(((100vw - 16px) / 11 - 8px) / 3);
      }
    }
  }
`
