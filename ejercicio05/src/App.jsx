import { useState, useEffect } from "react";
import "./App.css";
import {collection, query, onSnapshot, doc, updateDoc, deleteDoc,} from "firebase/firestore";
import { db } from "./Data/Firebase";

import { AddTodo } from "./Componentes/AddTodo";
import { Todo } from "./Componentes/Todo";


function App() {
 
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const Edit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const Delete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
 

  return (
    <div className="App">
     
      <div>
        <AddTodo/>
      </div>
      <div>
        {todos.map((todo)=>(
          <Todo todo={todo}
          Delete={Delete}
                  Edit={Edit}/>
        ))}

      </div>
    </div>
  );
}


export default App