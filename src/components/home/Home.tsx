import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import './Home.scss'

const Home = () => {
    //Variables
    const [numeroAdivinado, setNumeroAdivinado] = useState<any>("")
    const [numeroAleatorio, setNumeroAleatorio] = useState(0)
    const [mostrarNumeroAleatorio, setMostrarNumeroAleatorio] = useState(false)
    const [textoEnlaceNumeroSecreto, setTextoEnlaceNumeroSecreto] = useState("Mostrar")
    const numeroMinimo = 0
    const numeroMaximo = 10
    const segundosDelay = 5

    //Referencias
    const divNumeroSecretoRef: any = React.createRef()
    const botonAdivinar: any = React.createRef()

    //Metodo para almacenar valor ingresado por Usuario
    const handlerOnChange = (event: any) => {
        setNumeroAdivinado(event.target.value)
    }

    //Metodo Click adivinar el número
    const handlerAdivinarOnClick = () => {
        if(!Number.isInteger(parseInt(numeroAdivinado))){
            alert(`Ingrese un número válido entre ${numeroMinimo} y ${numeroMaximo}`)
        }else{
            botonAdivinar.current.disabled = true
            adivinarNumeroPromise()
            .then((result) => {
                alert(result)
            })
            .catch((error) => {
                alert(error)
            })
            .finally(() =>{
                botonAdivinar.current.disabled = false
                setNumeroAleatorio(obtenerNumeroAleatorio())
            })
        }
    }

    //Promesa adivinar número
    const adivinarNumeroPromise = () =>{
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(numeroAdivinado == numeroAleatorio){
                    resolve("Felicitaciones")
                }else{
                    reject("No adivino")
                }
            }, segundosDelay * 1000)
        })
    }

    //Metodo ver número aleatorio
    const handlerVerNumeroOnClick = (event: any) => {
        setMostrarNumeroAleatorio(!mostrarNumeroAleatorio)
        setTextoEnlaceNumeroSecreto((mostrarNumeroAleatorio) ? "Mostrar" : "Ocultar")
    }

    //Al iniciar componente, obtiene un número aleatorio
    useEffect(() => {
        setNumeroAleatorio(obtenerNumeroAleatorio())
    }, [])

    //Función para obtener un número aleatorio
    const obtenerNumeroAleatorio = () => {
        return Math.round(Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo)
    }

    return (
        <main className="main">
            <div className="container">
                <section className="wrapper">
                    <div className="heading">
                        <h1 className="text text-large">Adivina el número entre {numeroMinimo} y {numeroMaximo}</h1>
                    </div>
                    <form name="adivinarNumero" className="form">
                        <div className="input-control">
                            <input name="numero" className="input-field" placeholder="Número" value={numeroAdivinado} onChange={handlerOnChange} />
                        </div>
                        <div className="input-control">
                            <a href="#" onClick={handlerVerNumeroOnClick} className="text text-links">{textoEnlaceNumeroSecreto} número secreto</a>
                            <input type="button" name="submit" className="input-submit" value="Adivinar" onClick={handlerAdivinarOnClick} ref={botonAdivinar} />
                        </div>
                        {mostrarNumeroAleatorio &&
                            <div className="input-control" ref={divNumeroSecretoRef}>
                                <label className="input-label">Número secreto</label>
                                <strong><label className="input-label">{numeroAleatorio}</label></strong>
                            </div>
                        }
                    </form>
                </section>
            </div>
        </main>
    )
}

export default Home