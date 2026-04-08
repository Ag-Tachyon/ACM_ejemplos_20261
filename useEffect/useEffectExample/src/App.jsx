// 1. Importamos los Hooks a usar
import { useState , useEffect } from 'react'

import './App.css'


function App() {
  // const [count , setCount] = useState(0);
  const [tecla , setTecla] = useState("") // EL valor inicial será un string vacío

  useEffect(()=>{
    const manejarTecla = (event)=>{
      setTecla(event.key);
    }
  
    window.addEventListener("keydown" , manejarTecla);
    
    return () => {
      //Limpiamos la memoria de los efectos para cuando el elemento desaparezca
      window.removeEventListener("keydown" , manejarTecla);
    }
    
  }, [])
  
  // const updateCount = ()=>{
  //   setCount(count + 1)
  // }

  // useEffect(()=>{
  //   document.title = count;
  // })
  
  return (
    <>
      {/* <button className="btn" onClick={updateCount}>Hola {count}</button> */}
      <h2>última tecla oprimida: {tecla}</h2>
    </>
  )
}

export default App
