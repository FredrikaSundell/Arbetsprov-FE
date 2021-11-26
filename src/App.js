import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import WeatherListItem from './components/weatherListItem/WeatherListItem'
import WeatherForm from './components/weatherForm/WeatherForm'
import WeatherList from './components/weatherList/WeatherList'
import './app.scss'
import AddButton from './components/buttons/AddButton'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return []
    }
  })
  const [weather, setWeather] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function handleAddInputChange(e) {
    setWeather(e.target.value)
  }

  function handleAddFormSubmit(e) {
    e.preventDefault()

    if (weather !== '') {
      setTodos([
        ...todos,
        {
          id: new Date(),
          text: weather.trim(),
        },
      ])
    }

    setWeather('')
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((weather) => {
      return weather.id !== id
    })
    setTodos(removeItem)
  }

  return (
    <>
      <div className="weather-container">
        <Header />
        <div className="weather-input-container">
          <WeatherForm
            weather={weather}
            onAddInputChange={handleAddInputChange}
            onAddFormSubmit={handleAddFormSubmit}
          />
          <AddButton onClick={handleAddFormSubmit} />
        </div>
        <WeatherList>
          {todos.map((weather) => (
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
