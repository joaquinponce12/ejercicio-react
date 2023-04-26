import './Tarjeta.css';
import Img1 from '../Img/hombre.jpg';
import Img2 from '../Img/super.jpg';
//import Objeto2 from '../Objeto2';

const datos=[
    {Nombre: "HombreAraña",
    Fecha:"13/04/2023",
    Imagen:Img1},
    {Nombre: "Superman",
    Fecha:"13/04/2023",
    Imagen:Img2},
]
export function Objeto(){
    return(
        datos.map(item=>{
            return(
                <div className='card'>
                    <h3>{item.Nombre}</h3>
                    <h3>{item.Fecha}</h3>
                    <img src={item.Imagen} className='img'></img>
                    {/* <Objeto2/> */}
                </div>
            )
        }
        )
    )
}