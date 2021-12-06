import './weatherForm.scss'

function WeatherForm({ weather, onAddFormSubmit, onAddInputChange }) {
  return (
    <form onSubmit={onAddFormSubmit}>
      <span className="place">Plats:</span>
      <input
        name="weather"
        type="text"
        value={weather}
        onChange={onAddInputChange}
      />
    </form>
  )
}

export default WeatherForm
