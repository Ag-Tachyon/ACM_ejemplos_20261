// Importamos el useState de React
import { useState } from "react";

const CardInteractiva = ()=>{
    // El estado inicial del modo oscuro del componente será "false"
    const [isDarkMode , setIsDarkMode] = useState(false);

    // Declaramos Los estilos de los dos componentes
    const estilosContendor = {
        backgroundColor: isDarkMode ? '#2D3436' : '#F9F9F9',
        color: isDarkMode ? '#DFE6E9' : '#2D3436',
        padding: '1rem',
        borderRadius: '0.015rem',
        textAlign: 'center',
        transition: 'all .3s ease'
    };
    
    const estilosBoton = {
        backgroundColor: isDarkMode ? '#FDCB6E' : '#6c5ce7',
        color: 'white',
        border: 'none',
        outLine: 'none',
        borderRadius: '.5rem',
        marignTop: '.625rem',
        fontWeight: 'bold'
    };

    // const darkMode = ()=>{
    //     setIsDarkMode(!isDarkMode)
    // }

    return(<>
        {/* Creamos el contenedor con los estilos y definidos */}
        <div className="contenedor" style={estilosContendor}>
            <h3 className="title">{isDarkMode ? 'Modo Oscuro Activo' : 'Modo Claro Activo'}</h3>
            <p className="p__contenedor">Este componente cambia su aaparencia dependiendo del botón</p>

            {/* Creamos el btn con los estilos definidos previamente también */}
            <button className="btn" style={estilosBoton} onClick={()=>{setIsDarkMode(!isDarkMode)}}>
                {/* Dentro del btn colocamos la función encargada del cambio de tema */}
                Cambiar a {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
            </button>
        </div>
    
    </>)
}

// En este documento usamos ternarios ->  (condición) ? verdadero : falso;

export default CardInteractiva