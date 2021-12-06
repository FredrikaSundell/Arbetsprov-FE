import CloseButton from '../buttons/CloseButton'
import Icon from '../icon/Icon'
import './weatherListItem.scss'

function WeatherListItem({ weather, onDeleteClick }) {
  return (
    <li key={weather.id}>
      <Icon />
      <div className="cityname">
        <span className="celsius">{weather.temp}°</span>
        {weather.location}
      </div>
      <CloseButton onClick={() => onDeleteClick(weather.id)} />
    </li>
  )
}

export default WeatherListItem
