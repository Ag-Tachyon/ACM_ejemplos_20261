export function Btn({onDelete}){
    return(<>
        <button className="btn-delete" onClick={()=>onDelete(nombre)}>Borrar</button>
    </>)
}