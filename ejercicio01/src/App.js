import './App.css';

function App() {
  const dato=false;
  // if(dato)
  // {
  //   return (
  //     <h1>Hola Soy Joaquin</h1>
  //   )
  // }
  // else
  // {
  //   return (
  //     <h1>Hola Soy Juan</h1>
  //   );
  // }
  return(
    <h1>{dato?"Hola Soy Juan":"Hola Soy Joaquin"}</h1>
  );
}

export default App;
