import './buttons.scss'
import { ReactComponent as CloseLogo } from '../../assets/close-button.svg'

function CloseButton({ onClick }) {
  return (
    <button className="close-button">
      <CloseLogo onClick={onClick} />
    </button>
  )
}

export default CloseButton
