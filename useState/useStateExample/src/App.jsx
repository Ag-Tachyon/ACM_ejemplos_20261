// 1. Importamos el Hook
import { useState } from 'react'
import CardInteractiva from './cardInteractiva';

function App() {

  // 2. Hacemos la estructura básica del useState
  const [count , setCount] = useState(0);

  const increment = ()=>{
    setCount(count + 1);
    // 3. Establecemos que queremos que haga la función que cambia el estado, en este caso "setCount"
  }
  
  const restar = ()=>{
    setCount(count - 1);
  }

  return (
    <>
      <h2 className='contador-h2'> {count} </h2>
      <button  onClick={increment} className='btn-increment'>+</button>
      <br />
      <button  onClick={restar} className='btn-increment'>-</button>

      <br />
      <br />
      <br />
      <br />

      <CardInteractiva/>
    </>
  )
}

export default App
