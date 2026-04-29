import { useState } from "react"

export function FormularioValidacion(){

    const [formData , setFormData] = useState({
        nombre: "",
        email: "",
    });

    const [error , setError] = useState("") // Manejo de errores

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Evitar que se recargue el form de forma automática

        if(!formData.nombre || !formData.email){
            setError("Todos los campos son obligatorios")
            return
        }

        if(!/\S+@\S+\.\S+/.test(formData.email)){
            setError("El correo no es válido");
            return
        }

        setError("");
        alert("Info mandada correctamente 👾")
    }

    return(<>
        <form action="" className="formulario" onSubmit={handleSubmit}>
            <input type="text" 
            className="nombre" 
            name="nombre" 
            value={formData.nombre}
            placeholder="nombre de usuario" 
            onChange={handleChange} />
            
            <input type="text" 
            className="email" 
            value={formData.email}
            name="email" 
            placeholder="email de usuario" 
            onChange={handleChange} />

            {error && <p style={{"color": "red" , "fontSize": 24}} >{error}</p>}

            <input type="submit" value="enviar"/>
        </form>
    </>)
}