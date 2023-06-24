import './App.css'
import Header from './sections/Header';
import Footer from './sections/Footer';

function App() {

  const header = {
    title: 'Patita Feliz I La Mejor Veterinaria Del Perú',
    subtitle: '🐭Porque es parte de nuestra familia, lo cuidamos🐭',
  }

  const footer = {
    title: 'Patita Feliz',
    year: new Date().getFullYear(),
    author: 'Jesus Silva'
  };
  return (
    <>
      <Header data={header} />
      <Footer data={footer} />
    </>
  );
}

export default App
