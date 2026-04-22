import { useContext } from "react";
import { TemaContext } from "./temaContext"; 
// Importamos el contexto global

export function Pagina(){
    const {oscuro , alternarTema} = useContext(TemaContext);

    return(<>
        <div className={`pagina ${oscuro ? "oscuro" : "claro"}`}>
            <h1 className={`titulo ${oscuro ? "oscuro" : "claro"}`}>
                {oscuro ? "🕹️ Modo Oscuro" : "🎄 Modo Claro"}
            </h1>

            <button className="btn" onClick={alternarTema}>
                    Cambiar Tema
            </button>
        </div>
    </>)

}