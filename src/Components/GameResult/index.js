import {
  GameResultContainer,
  PlayerContainer,
  Player,
  PlayerText,
  Image,
  PlayAgainContainer,
  PlayerWonHeading,
  PlayAgainButton,
} from './styledComponents'

const GameResult = props => {
  const {playAgain, gameResultProps} = props

  const {opponentOption, playersUrl, isWon} = gameResultProps

  const {imageUrl} = opponentOption

  let result = ''
  if (isWon === 'DRAW') {
    result = 'IT IS DRAW'
  } else {
    result = isWon ? `YOU WON` : `YOU LOSE`
  }

  const onPlayAgain = () => {
    playAgain()
  }

  return (
    <GameResultContainer>
      <PlayerContainer>
        <Player>
          <PlayerText>YOU</PlayerText>
          <Image src={playersUrl} alt="your choice" />
        </Player>
        <Player>
          <PlayerText>OPPONENT</PlayerText>
          <Image src={imageUrl} alt="opponent choice" />
        </Player>
      </PlayerContainer>
      <PlayAgainContainer>
        <PlayerWonHeading>{result}</PlayerWonHeading>
        <PlayAgainButton type="button" onClick={onPlayAgain}>
          Play Again
        </PlayAgainButton>
      </PlayAgainContainer>
    </GameResultContainer>
  )
}

export default GameResult
