//Pasamos los props como si usáramos desestructuración
export function TarjetaUsuario({nombre , rol , id , equipo , children}){
  return(<>
    {/*Creamos nuestro elemento*/}
    <div className="user-info__container" style={{"padding":"10px", "border": "solid thin white" , "border-radius": "15px"}}>
      {/*Colocamos los props donde los queremos usar */}
      <h3>Id:{" "+ id}</h3>
      <h3>Nombre:{" "+ nombre}</h3>
      <h3>Rol:{" "+ rol}</h3>
      <h3>Equipo:{" "+ equipo}</h3>

      {children}
    </div>
  </>)
}