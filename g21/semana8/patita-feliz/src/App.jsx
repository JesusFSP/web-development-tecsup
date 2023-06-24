import './App.css'
import Header from './sections/Header';

function App() {

  const header = {
    title: 'Patita Feliz I La Mejor Veterinaria Del Perú',
    subtitle: '🐭Porque es parte de nuestra familia, lo cuidamos🐭',
  }

  return (
    <Header data = {header}/>
  )
}

export default App
