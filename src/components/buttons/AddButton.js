import './buttons.scss'
import { ReactComponent as AddLogo } from '../../assets/add-logo.svg'

function AddButton({ onClick }) {
  return (
    <button className="add-button" onClick={onClick}>
      <AddLogo />
    </button>
  )
}

export default AddButton
