import './App.css'
import Weather from './components/WeatherApp.jsx'
import Counter from './components/Counter.jsx';

function App() {
  

  return (
    <>
      <header>
        <h1>Single Day Weather </h1>
        <p>An app that fetches the weather from an API.</p>
        </header>
        <main>
          <Counter />
          <Weather />
        </main>
        <footer></footer>
    </>
  )
}

export default App;
