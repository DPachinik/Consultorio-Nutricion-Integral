import { useState } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import SobreMi from './Pages/SobreMi';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-screen md:overflow-hidden">
      <Router>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<Inicio menuOpen={menuOpen} />} />
          <Route path="/SobreMi" element={<SobreMi menuOpen={menuOpen} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
