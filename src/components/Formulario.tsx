
function Lista({}) {

    const listaTipoDocumento = [
      { id: "1", codigo: "001", nombre: "Contrato" },
      { id: "2", codigo: "002", nombre: "Papeleta Vacaciones" },
      { id: "3", codigo: "003", nombre: "Seguro" },
      { id: "4", codigo: "004", nombre: "Bonificaciones" }
    ];

    const itemList = listaTipoDocumento.map((item) => (
      <li key={item.id}>
        {item.codigo} {item.nombre}
      </li>
    ));

    return (
      <div>
        <ol style={{ listStyleType: "none" }}>{itemList}</ol>
      </div>
    );
  }
  
  export default function ListadoTipoDocumento() {
    return (      
      <div className="ListadoTipoDocumento">
            <label className="form-label"
        htmlFor="Titulo">Listado Tipos de Documento</label>
        <Lista />
      </div>
    );
  }