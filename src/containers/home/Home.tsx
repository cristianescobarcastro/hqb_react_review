import React from 'react'

const Home = () => {  
    
    const [boton, setValorBoton] = React.useState<string>("Mensaje1");
    const [mensaje, setTexto] = React.useState<string>("Hola, bienvenido");

    const handleModificaHeader = (e:any) => {       
        e.preventDefault();
        setValorBoton(boton=="Mensaje1" ? "Mensaje2" :"Mensaje1")
        setTexto(boton=="Mensaje1" ? "Vuelve pronto!" : "Hola, bienvenido")
    };

    return (
        <header>              
          <h1>{mensaje}</h1>         
          <button id="boton" onClick={handleModificaHeader}>Salir</button>  
      </header>
    )
}

export default Home;