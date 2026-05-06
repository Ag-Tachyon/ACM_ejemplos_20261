import {Link , NavLink} from 'react-router-dom'

export function Navbar(){
    return(<>
        <nav className="navbar">
            {/* Link funciona com un anchor (<a>) pero interno a React, no recarga toda la página */}
            <Link to="/">Inicio </Link>

            <NavLink to="/perfil" className={({isActive})=> isActive ? 'Link-activo' : ''}>
                Mi perfil
            </NavLink>
            <NavLink to="/manga" className={({isActive})=> isActive ? 'Link-activo' : ''}>
                Mis mangas
            </NavLink>
        </nav>
    </>)
}