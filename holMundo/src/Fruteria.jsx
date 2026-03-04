import { Selector } from "./selector"

//Creamos el padre
export function Fruteria(){
    const manejarSeleccion = (fruta)=>{
        console.log(fruta)
    }

    return(<>
        <Selector deFruta={manejarSeleccion}/>
    </>)
}