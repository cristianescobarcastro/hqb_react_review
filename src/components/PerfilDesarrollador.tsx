import React from "react";

type PerfilDesarrolladorProps = {
    nombre: string,
    edad: number,
    tienePantalla: boolean,
}

const PerfilDesarrollador = (props: PerfilDesarrolladorProps) =>{
const [tienePantalla] = React.useState<string>((props.tienePantalla == true  ? "Tiene Pantalla" : "No Tiene Pantalla"));
    return(
        <div>Nombre Desarrollador: {props.nombre} <br></br>       
        Edad Desarrollador: {props.edad} <br></br>       
        Marca: {tienePantalla}
        </div>      
    );
}

export default PerfilDesarrollador;