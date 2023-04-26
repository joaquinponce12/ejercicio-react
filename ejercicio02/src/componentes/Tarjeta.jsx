import './Tarjeta.css';
export function Tarjeta({estado})
{
    return(
        <div className='card'>
            <h1 className={estado?"on":"of"}>Mi Tarjeta</h1>
        </div>
    )
}