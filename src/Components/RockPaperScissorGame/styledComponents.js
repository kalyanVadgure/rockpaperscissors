import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #223a5f;
  padding: 20px;
`

export const ScoreCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid white;
  border-radius: 8px;
  width: 90%;
  padding: 5px 20px 5px 20px;
  box-sizing: border-box;
`

export const RocKPaperScissorHeading = styled.h1`
  font-size: 22px;
  color: white;
  font-family: 'Roboto';
  font-weight: 400;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  min-width: 110px;
  height: 110px;
  border-radius: 8px;
`

export const ScoreText = styled.p`
  color: #223a5f;
  font-size: 20px;
  font-family: 'Roboto';
  line-height 0.7;
`
export const ShowScore = styled.p`
  color: #223a5f;
  font-size: 32px;
  font-family: 'Roboto';
  line-height: 0.5;
`

export const RockPaperScissorContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  width: 40%;
  height: 50%;
`

export const RulesButtonContainer = styled.div`
  align-self: flex-end;
`
