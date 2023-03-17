import React from 'react'
import styled from 'styled-components'
import { ISectionRewards, SectionColor } from '../../types/types'
import Points from './points'
import Reward from './reward'
import ScoreDisplayer from './score-displayer'
import SectionScoresTable from './section-scores-table'

interface IProps {
  sectionColor: SectionColor
  color: string
  children: JSX.Element
  rewards?: ISectionRewards
  score: number
  points?: number[]
  clickEvent?: () => void
}

function GridSection({
  sectionColor,
  color,
  children,
  rewards,
  score,
  points,
  clickEvent,
}: IProps) {
  return (
    <Container color={color} onClick={clickEvent}>
      <MainContainer>
        {points && <SectionScoresTable points={points} color={sectionColor} />}
        <TopContainer>
          <GridContainer>{children}</GridContainer>
          <RowRewardsContainer>
            {rewards &&
              rewards.rows.map(({ reward, points }, index) => (
                <RewardContainer key={index}>
                  {reward && <Reward data={reward} />}
                  {points && <Points color={sectionColor} value={points} />}
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
                  {points && <Points color={sectionColor} value={points} />}
                </RewardContainer>
              ))}
          </ColumnRewardsContainer>
          <RewardContainer>
            {rewards?.diagonal?.reward && (
              <Reward data={rewards.diagonal.reward} />
            )}
            {rewards?.diagonal?.points && (
              <Points color={sectionColor} value={rewards.diagonal.points} />
            )}
          </RewardContainer>
        </BottomContainer>
      </MainContainer>
      <ScoreDisplayer score={score} />
    </Container>
  )
}

export default GridSection

const Container = styled.div<{ color: string }>`
  align-items: center;
  border: ${({ color }) => `solid 2px ${color}`};
  display: flex;
  flex-direction: column;
  height: calc(100% / 3 - 8px);
  justify-content: center;
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

  & > div {
    height: 50%;
    width: 50%;
  }
`
