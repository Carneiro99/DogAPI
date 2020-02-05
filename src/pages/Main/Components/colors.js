// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [cores, setCores] = useState([])

//   const setUserColor = e => {
//     e.preventDefault()
//     cores = e.target.elements."valor do option aqui".value
//     setCores(cores)
//   }

//   useEffect(() => {
//     const coresPersistidas = JSON.stringify(cores)
//     localStorage.setItem("cores", coresPersistidas)

//     return () => {
//       const recupereCoresPersistidas = JSON.parse(localStorage.getItem("cores"),
//       setCores(recupereCoresPersistidas),
//     }
//   }, [cores])

//   return (
//     <div>
//       <FormComponent cores={setUserColor} />
//     </div>
//    );
// };
