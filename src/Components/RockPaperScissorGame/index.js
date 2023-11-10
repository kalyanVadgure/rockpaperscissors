import {Component} from 'react'
import RulesPopup from '../RulesPopup'

import GameButtons from '../GameButton'
import GameResult from '../GameResult'

import {
  AppContainer,
  ScoreCardContainer,
  RocKPaperScissorHeading,
  ScoreContainer,
  ScoreText,
  ShowScore,
  RockPaperScissorContainer,
  RulesButtonContainer,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissorGame extends Component {
  state = {
    score: 0,
    isOptionChoosen: false,
    playersUrl: '',
    opponentOption: choicesList[Math.floor(Math.random() * 3)],
    isWon: false,
  }

  renderScoreCard = () => {
    const {score} = this.state

    return (
      <ScoreCardContainer>
        <RocKPaperScissorHeading>Rock Paper Scissors</RocKPaperScissorHeading>
        <ScoreContainer>
          <ScoreText>Score</ScoreText>
          <ShowScore>{score}</ShowScore>
        </ScoreContainer>
      </ScoreCardContainer>
    )
  }

  CheckGameResults = buttonItem => {
    const {id, imageUrl} = buttonItem
    const {opponentOption} = this.state

    if (opponentOption.id === id) {
      this.setState(prevState => ({
        isOptionChoosen: true,
        playersUrl: imageUrl,
        isWon: 'DRAW',
      }))
    } else if (id === 'ROCK' && opponentOption.id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        isOptionChoosen: true,
        playersUrl: imageUrl,
        isWon: false,
      }))
    } else if (id === 'SCISSORS' && opponentOption.id === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        isOptionChoosen: true,
        playersUrl: imageUrl,
        isWon: false,
      }))
    } else if (id === 'PAPER' && opponentOption.id === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        isOptionChoosen: true,
        playersUrl: imageUrl,
        isWon: false,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isOptionChoosen: true,
        playersUrl: imageUrl,
        isWon: true,
      }))
    }
  }

  renderRocKPaperScissorButton = () => {
    const {score} = this.state

    return (
      <RockPaperScissorContainer>
        {choicesList.map(eachButton => (
          <GameButtons
            buttonItem={eachButton}
            key={eachButton.id}
            CheckGameResults={this.CheckGameResults}
          />
        ))}
      </RockPaperScissorContainer>
    )
  }

  playAgain = () => {
    this.setState({
      isOptionChoosen: false,
      opponentOption: choicesList[Math.floor(Math.random() * 3)],
    })
  }

  render() {
    const {isOptionChoosen, opponentOption, playersUrl, isWon} = this.state

    const gameResultProps = {opponentOption, playersUrl, isWon}

    return (
      <AppContainer>
        {this.renderScoreCard()}
        {!isOptionChoosen && this.renderRocKPaperScissorButton()}
        {isOptionChoosen && (
          <GameResult
            playAgain={this.playAgain}
            gameResultProps={gameResultProps}
          />
        )}
        <RulesButtonContainer>
          <RulesPopup />
        </RulesButtonContainer>
      </AppContainer>
    )
  }
}

export default RockPaperScissorGame
