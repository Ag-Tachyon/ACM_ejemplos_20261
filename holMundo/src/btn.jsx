import './btn.css'

// Usamos la palabra reservada "props" para pasar los properties como argumento del comoponente
export function Btn(props){
  return(<>
  {/* En este caso queremos que sea el texto del btn, entonces lo ponemos dentro del btn */}
    <button className={props.name}>{props.text}</button>
  </>)
}

