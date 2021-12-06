import Sun from './../icons/sun'
import Cloudy from './../icons/cloudy'
import Rain from './../icons/rain'
import Snow from './../icons/snow'
import Fallback from './../icons/fallback'
import './icon.scss'

const icons = {
  cloudy: <Cloudy />,
  sun: <Sun />,
  rain: <Rain />,
  snow: <Snow />,
  fallback: <Fallback />,
}

function Icon({ icon }) {
  return <div className="weather-icon">{icons[icon] || icons.fallback}</div>
}

export default Icon
