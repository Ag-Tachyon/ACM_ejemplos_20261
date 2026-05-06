import { Btn } from "../components/btn"

export function Home(){
    return(<>
        <h1 className="title">
            Bienvenido
        </h1>
        <Btn nombre="btn_inicio" sitio="inicio"/>
    </>)
}