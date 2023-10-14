import React from 'react'

 function Todo() {
    const data = [
        { name: "Puja", id: 1, email: "p@g.com", contact: '111' },
        { name: "Piya", id: 2, email: "p@g.com", contact: '111' },
        { name: "Peter", id: 3, email: "p@g.com", contact: '111' },
      ];
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
        

    </div>
  )
}
export default Todo;


import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Todo from './Todo';

// function Todo() {
//   const data = [
//     { name: "Puja", id: 1, email: "p@g.com", contact: '111' },
//     { name: "Piya", id: 2, email: "p@g.com", contact: '111' },
//     { name: "Peter", id: 3, email: "p@g.com", contact: '111' },
//   ];

//   return (
//     <div>
//       <h2>Todo</h2>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }
// function TodoPage(){
//     return (
//         <div>
//           <h1>Todo Page</h1>
//           <Todo />
//         </div>
//       );
//     } 

function App() {
  return (
//     <BrowserRouter>
//       <div>
//         <h1>Hello</h1>
//         <Link to="/todo">Todo</Link>
// <Routes>
//         <Route path="/todo" element={<Todo/>} />
//         </Routes>
//       </div>
//     </BrowserRouter>
<Todo/>
  );
}

export default App;
