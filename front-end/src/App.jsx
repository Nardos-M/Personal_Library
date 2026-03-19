import { Routes, Route, Navigate } from 'react-router-dom';
import MyListOfBooks from './pages/MyListOfBooks.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/my-books" replace />} />
      <Route path="/my-books" element={<MyListOfBooks />} />
    </Routes>
  );
}

export default App;




// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <p>My Personal Library Frontend</p>
//     </div>
//   );
// }

// export default App;