import './App.css'
import { Btn } from './btn'
import { BtnBorrar } from './btnBorrar'
import { Fruteria } from './Fruteria'

function App() {

  //Creamos el texto que queremos en nuestros componentes (manual por ahora)
  let btnTextHola = "Botón hola"
  let btnTextChao = "Botón chao"
  const btnDelete = "Borrar"

  return (
    <>

      {/* //Instaciamos los componentes y les pasamos sus respectivos textos como props*/}
      <Btn text={btnTextHola} name={"hola"} /> {/* Usamos sintaxis objeto */}
      <Btn text={btnTextChao} name={"chao"}/>
      <BtnBorrar text={btnDelete} /> {/* Usamos desestructuración */}
      


      {/* Usando el callback */}
      <Fruteria/>

    </>
  )
}

export default App
