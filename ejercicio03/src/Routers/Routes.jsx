import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Pagina1 } from "../Pages/Pagina1";
import { Pagina2 } from "../Pages/Pagina2";
export function MisRutas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Pagina1/>}/>
            <Route path="/pagina2" element={<Pagina2/>}/>
        </Routes>
        </BrowserRouter>
    )
}