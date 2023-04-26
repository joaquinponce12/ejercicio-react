export function Estudiante(props)
{
    const registro={
        Nombre:"Joaquin",
        Apellido:"Ponce",
        Materia:"Programacion IV"
    }
    return(
    <div>
        <h1>Estudiante</h1>
        <h3>Nombre: {registro.Nombre}</h3>
        <h3>Apellido: {registro.Apellido}</h3>
        <h3>Materia: {registro.Materia}</h3>
        <h3>Nota: {props.Nota}</h3>
        <h3>{props.Nota>=50?"Aprobado":"Reprobado"}</h3>
    </div>)
}