export function Usuarios(){
    const registro={
        Nombre:"Joaquin",
        Apellido:"Ponce",
        Edad:27,
        Altura:1.65
    }
    return(
    <div>
        <h1>Usuarios</h1>
        <h3>Nombre: {registro.Nombre}</h3>
        <h3>Apellido: {registro.Apellido}</h3>
        <h3>Edad: {registro.Edad}</h3>
        <h3>Altura: {registro.Altura}</h3>
    </div>)
}