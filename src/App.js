import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import WeatherListItem from './components/weatherListItem/WeatherListItem'
import WeatherForm from './components/weatherForm/WeatherForm'
import WeatherList from './components/weatherList/WeatherList'
import './app.scss'
import AddButton from './components/buttons/AddButton'

function App() {
  const [weathers, setWeathers] = useState(() => {
    const savedWeathers = localStorage.getItem('weathers')
    if (savedWeathers) {
      return JSON.parse(savedWeathers)
    } else {
      return []
    }
  })
  const [input, setInput] = useState('')

  const [error, setError] = useState(null)

  useEffect(() => {
    localStorage.setItem('weathers', JSON.stringify(weathers))
  }, [weathers])

  function handleAddInputChange(e) {
    setInput(e.target.value)
  }

  async function handleAddFormSubmit(e) {
    e.preventDefault()

    const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API_KEY}&query=${input}`

    const data = await fetch(url).then((response) => response.json())

    if (data.error) {
      setError('Det finns ingen stad som matchar din sökning')
    } else {
      if (input !== '') {
        setWeathers([
          ...weathers,
          {
            id: new Date(),
            location: data.location.name,
            temp: data.current.temperature,
          },
        ])
      }

      setInput('')
    }
  }

  function handleDeleteClick(id) {
    const removeItem = weathers.filter((weather) => {
      return weather.id !== id
    })
    setWeathers(removeItem)
  }

  return (
    <>
      <div className="weather-container">
        <Header />
        <div className="weather-input-container">
          <WeatherForm
            weather={input}
            onAddInputChange={handleAddInputChange}
            onAddFormSubmit={handleAddFormSubmit}
          />
          <AddButton onClick={handleAddFormSubmit} />
        </div>
        {error && <p>{error}</p>}
        <WeatherList>
          {weathers.map((weather) => (
            <WeatherListItem
              key={weather.id}
              weather={weather}
              onDeleteClick={handleDeleteClick}
            />
          ))}
        </WeatherList>
      </div>
      <Footer />
    </>
  )
}

export default App
