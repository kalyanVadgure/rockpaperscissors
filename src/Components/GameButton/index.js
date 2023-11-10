import {ButtonItem, GameButton, ButtonImage} from './styledComponents'

const GameButtons = props => {
  const {buttonItem, CheckGameResults} = props
  const {id, imageUrl} = buttonItem

  const onSelectImage = () => {
    CheckGameResults(buttonItem)
  }

  const lowerId = id.toLowerCase()
  const buttonTextId = `${lowerId}Button`

  return (
    <ButtonItem key={id}>
      <GameButton
        type="button"
        onClick={onSelectImage}
        data-testid={buttonTextId}
      >
        <ButtonImage src={imageUrl} alt={id} />
      </GameButton>
    </ButtonItem>
  )
}

export default GameButtons
