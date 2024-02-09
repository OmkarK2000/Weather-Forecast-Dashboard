import "./App.css"
import Weather from "./components/weather"

const App = () => {
  return (
    <div>
      <h1 className="text-center text-4xl mt-6 md:text-6xl">Weather Dashboard</h1>
      <Weather/>

    </div>
  )
}

export default App