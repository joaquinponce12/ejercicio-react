import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Componentes } from '../Componentes/Componentes';
export function Pagina2(){
    return(
    <div>
        <h1>Pagina 2</h1>
        <Link to={"/"}>Ir a Pagina1 </Link>
        <Componentes/>
    </div>
   );
}