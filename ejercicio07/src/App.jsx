import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig'

function App() {
  const probarFirebase = async() => {
    const dato = {
      nombre:'algun nombre 2',
      apellido: 'nose 2'
    }
    // Referencia a la coleccion
    const newRef = doc(collection( db , "libros"));
    // Subimos el documento a la coleccion mediante la referencia
    await setDoc(newRef, dato); 
  }
  return (
    <div>
      <h1>Hola Mundo <i className="bi bi-globe-europe-africa"></i> </h1>
      <button className="btn btn-sm btn-warning" onClick={ probarFirebase } > Probar Firebase </button>
    </div>
  )
}
export default App