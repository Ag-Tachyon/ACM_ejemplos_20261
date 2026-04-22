import { TemaProvider } from './components/temaProvider.jsx'
import { Pagina } from './components/pagina.jsx'
// import './App.css'
import './styles.css'

function App() {

  return (
    <>
      <TemaProvider>
          <Pagina/>
      </TemaProvider>
    </>
  )
}

export default App
