import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { NotFound } from './pages/NotFound'
import './App.css'


function App() {

  return (
    <>
      {/* 1. BrowserRouter: Envuelve todos los componenetes para habilitar el historial de navegación */}
      <BrowserRouter>
          {/* El navbar va a afuera de "routes" porque necesitamos que se siempre se vea, que se vea en todas las páginas */}
          <Navbar/>

          {/* 2. Routes: Es el contenedor que decide qué se va a mostrar */}
          <Routes>
              {/* Rutas exactas para el inicio */}
              <Route path='/' element={<Home/>}/>
              {/* Ruta estática simple */}
              <Route path='/perfil' element={<Profile/>}/>

              <Route path="*" element={<NotFound/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
