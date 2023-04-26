import { useEffect, useState } from "react";
export function Hoo(){
    const [likes,setLike]=useState(0);
    const darLike=()=>{
        setLike(likes+1);
    }
    const dardisLike=()=>{
        setLike(likes-1);
    }
    useEffect(darLike,[]);
    return(
        <div>
            <h1>Likes en la Pagina{likes}</h1>
            <button onClick={darLike}>Dar Likes</button>
            <button onClick={dardisLike}>Dar DisLikes</button>
        </div>
    )
}