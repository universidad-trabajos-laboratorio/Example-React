import { useRef, useState } from 'react';
import './App.css'
import { Navbar } from './components/Navbar'

function App() {
  const [links,setLinks] = useState([
    "Home",
    "About",
    "Contact"
]);

const ref = useRef();


  return (
    <div className="App">
      <Navbar name="UNA LISTA DE LINKS" links={links} />
      <input ref={ref} type="text" />
      <button onClick={addLink}>Agregar</button>
    </div>
  ) 
}

export default App
