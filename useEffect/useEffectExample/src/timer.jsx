import { useState , useEffect } from "react";

export function Timer(){
    //Creamos el estado inicial de nuestro timer
    const [segundos , setSegundos] = useState(0);
    const [active , setActive] = useState(false)

    useEffect(()=>{

        if(!active) return;

        const intervalo = setInterval(()=>{
            //Le sumamamos uno al tiempo previo
            setSegundos(previo => previo + 1)
        } , 1000)

        return () => {
            clearInterval(intervalo);
        }

    }, [active])
    

    return(<>

        {/*Mostramos el timer */}
        <h2>Tiempo: {segundos}</h2>
        <button onClick={()=> setActive(true)} >Play</button>
    
    </>)
}