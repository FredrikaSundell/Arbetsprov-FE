import './buttons.scss'
import { ReactComponent as AddLogo } from '../../assets/add-logo.svg'

function AddButton() {
  return (
    <button className="add-button">
      <AddLogo />
    </button>
  )
}

export default AddButton
