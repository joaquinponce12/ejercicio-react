import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export function Pagina1(){
    return(
    <div>
        <h1>Pagina 1</h1>
        <Link to={"/Pagina"}>Ir a Pagina2 </Link>
    </div>
    );
}