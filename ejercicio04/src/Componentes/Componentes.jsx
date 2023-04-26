export function Componentes(){
    const estudiantes=[
        {Nombre: "Joaquin",
    },
        {Nombre: "Jose",
    },
        {Nombre: "Juan",
    },
        {Nombre: "Antonio",
    },
        {Nombre: "Jesus",
    }
    ]
    return(
        estudiantes.map(item=>{
            return(
                <div className='card'>
                    <h3>{item.Nombre}</h3>
                </div>
            )
        }
        )
    )
}