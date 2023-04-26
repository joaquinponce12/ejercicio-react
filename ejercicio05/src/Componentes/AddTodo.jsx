import {db} from '../Data/Firebase'
import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'

export function AddTodo() {
    const [title,setTitle]= useState([]);
    const insertar=async(e)=>{
        e.preventDefault();
        if (title!="") {
            await addDoc(collection (db,"todos"),
            {
                title,
                completed: true
            });
            setTitle("");
        }
    }
    return(
        <form onSubmit={insertar}>
            <div>
                <input type="text" placeholder='Ingrese sus Titulos' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div>
                <button>Insertar</button>
            </div>
        </form>
    );
}
export default AddTodo;