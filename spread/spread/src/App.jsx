import {TarjetaUsuario} from './tarjetaUsuario.jsx';
import { Btn } from './btn.jsx';

function App() {
  
  //Creamos nuestro usuario
  const userData = {
    id: 101,
    nombre: "Daiwa Scarlet",
    rol: "Front Runner",
    equipo: "Spica"
  }

  //Esta será nustra función callback
  const deleteUser = (nombre)=>{
    return alert(`${nombre} ha sido eliminad@`) 
  }
  
  return (
    // usamos spreads (...[nombre del elemento]) para poder pasar los todos los datos de una vez
    <TarjetaUsuario {...userData}>
      {/* //Colocamos el btn dentro de TarjetaUsuario para poder usar children y anidar los componentes -> usamos Atomic Design */}
      <Btn onDelete={deleteUser}/>
    </TarjetaUsuario>
  );
}

export default App;