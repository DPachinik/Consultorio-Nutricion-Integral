import { useState } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Router>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
