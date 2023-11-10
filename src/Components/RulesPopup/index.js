import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  PopupContainer,
  RulesImage,
  CloseButton,
  RulesButton,
} from './styledComponents'

const RulesPopup = () => {
  const a = 0

  return (
    <Popup trigger={<RulesButton type="button">Rules</RulesButton>} modal>
      {close => (
        <PopupContainer>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine />
          </CloseButton>
          <RulesImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </PopupContainer>
      )}
    </Popup>
  )
}

export default RulesPopup
