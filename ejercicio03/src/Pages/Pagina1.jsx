import { Link } from "react-router-dom";
export function Pagina1(){
    return(
    <div>
        <h1>Esta es la Pagina 1</h1>
        <img src="https://i.pinimg.com/736x/18/4c/51/184c515146b9a891c744ec9a266f2229.jpg" />
        <Link to={"/Pagina2"}>Ir a Pagina 2</Link>
    </div>
    );
}