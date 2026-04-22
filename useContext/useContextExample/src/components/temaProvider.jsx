import { useState } from "react";
import { TemaContext } from "./temaContext";

export function TemaProvider({children}){
    const [oscuro , setOscuro]= useState(false);

    const alternarTema = ()=>{
        setOscuro(!oscuro);
    }

    return(<>
        <TemaContext.Provider value={{oscuro , alternarTema}}>
            {/* los elementos (children) que estén dentro de esta "caja" usarán el contexto que les pasamos, en este caso */}
            {/* el tema claro u oscuro */}
            {children}
        </TemaContext.Provider>
    </>)
}