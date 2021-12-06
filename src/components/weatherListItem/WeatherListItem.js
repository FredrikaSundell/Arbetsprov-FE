import CloseButton from '../buttons/CloseButton'
import Icon from '../icon/Icon'
import './weatherListItem.scss'
import clsx from 'clsx'

function WeatherListItem({ weather, onDeleteClick }) {
  let icon = ''
  if (weather.conditions.some((cond) => cond.includes('clear'))) {
    icon = 'sun'
  } else if (weather.conditions.some((cond) => cond.includes('rain'))) {
    icon = 'rain'
  } else if (weather.conditions.some((cond) => cond.includes('snow'))) {
    icon = 'snow'
  } else if (
    weather.conditions.some(
      (cond) => cond.includes('cloudy') || cond.includes('overcast')
    )
  ) {
    icon = 'cloudy'
  }

  return (
    <li
      className={clsx({
        red: weather.temp >= 20,
        yellow: weather.temp >= 1 && weather.temp <= 19,
        blue:
          weather.temp <= 0 ||
          weather.conditions.some((cond) => cond.includes('rain')),
      })}
    >
      <Icon icon={icon} />
      <div className="cityname">
        <span className="celsius">{weather.temp}°</span>
        {weather.location}
      </div>
      <CloseButton onClick={() => onDeleteClick(weather.id)} />
    </li>
  )
}

export default WeatherListItem
