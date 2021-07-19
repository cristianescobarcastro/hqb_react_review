import { useState } from "react";

interface User {
    username: string,
    nombre: string,
    apellido: string,
    estado: boolean
}


const Formulario = () => {

    const [user, setValue] = useState<User>({
        username: 'cescobar',
        nombre: '',
        apellido: '',
        estado: true
    });

    const hanlderInput = (event: any): void => {
        setValue({
            ...user,
            [event.target.name]: event.target.value
        })
    };


    const submit = (event: any): void => {           
        const tienePantalla = (user.estado === true  ? "Usuario Activo" : "Usuario Inactivo");      
        alert(tienePantalla);
    };


    return (
        <form className="needs-validation" noValidate={false}  onSubmit={submit}>
            <div className="row g-3">
                <div className="col-sm-6">
                    <label className="form-label"
                        htmlFor="username">Usuario: </label>
                    <label className="form-label"
                        htmlFor="usernameValue">{user?.username}</label>
                </div>
            </div>
            <div className="row g-3">
                <div className="col-sm-6">
                    <label className="form-label"
                        htmlFor="nombre">Nombre: </label>
                    <input className="form-control"
                        type="text"
                        id="nombre"
                        placeholder=""
                        value={user?.nombre}
                        name="nombre"
                        onChange={hanlderInput}
                        required />
                    <div className="invalid-feedback">
                        Valor requerido.
                    </div>
                </div>
            </div>
            <div className="row g-3">
                <div className="col-sm-6">
                    <label className="form-label"
                        htmlFor="apellido">Apellido: </label>
                    <input className="form-control"
                        type="text"
                        id="apellido"
                        placeholder=""
                        value={user?.apellido}
                        name="apellido"
                        onChange={hanlderInput}
                        required />
                    <div className="invalid-feedback">
                        Valor requerido.
                    </div>
                </div>
            </div>

            <div className="row g-3">
                <div className="col-sm-6">
                    <label className="form-label"
                        htmlFor="activo">Activo: </label>
                   <input id="activo" type="checkbox" onChange={hanlderInput} checked={user?.estado}/>
                </div>
            </div>


            <button className="w-100 btn btn-primary btn-lg"
                type="submit">
                Validar Estado
            </button>
        </form >
    )
}

export default Formulario