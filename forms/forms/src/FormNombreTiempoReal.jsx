import { useState } from "react";

export function FormularioNombreTiempoReal(){
    
    const [nombre , setNombre] = useState("");

    const handleChange = (e)=>{
        setNombre(e.target.value);
    }

    const handleSubmit = (e)=>{
        event.preventDefault();
        alert(`Hola ${nombre}`)
    }
    
    return(<>
        <form action="" className="formulario" onSubmit={handleSubmit}>
            <label htmlFor="">
                Nombre: 
                <input onChange={handleChange} type="text" placeholder="Nombre" />
            </label>

            <input type="submit" value="Enviar" />
        </form>

        <h2>{nombre}</h2>
    </>)
}